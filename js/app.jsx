import {h, Component} from 'preact';
import to from 'to-case';
import Output from './components/Output/index.jsx';

/**
 * @enum {string}
 */
const SEARCH_PARAM = {
  QUERY: 'q'
};

function select({target}) {
  target.select();
}

function readSearchRequest() {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get(SEARCH_PARAM.QUERY) || '';
}

function updateSearchRequest(value) {
  const searchParams = new URLSearchParams({[SEARCH_PARAM.QUERY]: value});
  const url = window.location.pathname + '?' + searchParams.toString();
  window.history.pushState(null, null, url);
}

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      value: readSearchRequest()
    };

    this.converters = [
      {
        name: 'camel',
        fn: value => to.camel(value)
      },
      {
        name: 'capital',
        fn: value => to.capital(value)
      },
      {
        name: 'constant',
        fn: value => to.constant(value)
      },
      {
        name: 'dot',
        fn: value => to.dot(value)
      },
      {
        name: 'inverse',
        fn: value => to.inverse(value)
      },
      {
        name: 'lower',
        fn: value => to.lower(value)
      },
      {
        name: 'pascal',
        fn: value => to.pascal(value)
      },
      {
        name: 'sentence',
        fn: value => to.sentence(value)
      },
      {
        name: 'slug',
        fn: value => to.slug(value)
      },
      {
        name: 'snake',
        fn: value => to.snake(value)
      },
      {
        name: 'space',
        fn: value => to.space(value)
      },
      {
        name: 'title',
        fn: value => to.title(value)
      },
      {
        name: 'upper',
        fn: value => to.upper(value)
      }
    ];

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue({target: {value}}) {
    updateSearchRequest(value);

    this.setState({
      value,
    });
  }

  render(props, {value}) {
    return (
      <div>
        <div className="app__input">
          <input
            value={value}
            onInput={this.updateValue}
            onClick={select}
            autoFocus
          />
        </div>

        <div className="app__output">
          {this.converters.map(({name, fn}) => (
            <Output
              key={name}
              value={fn(value)}
              placeholder={name}
            />
          ))}
        </div>
      </div>
    );
  }
}
