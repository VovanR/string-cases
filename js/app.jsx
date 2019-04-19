import {h, Component} from 'preact';
import linkState from 'linkstate';
import to from 'to-case';
import Output from './components/Output/index.jsx';

function select({target}) {
  target.select();
}

export default class App extends Component {
  constructor() {
    super();

    this.state.value = '';

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
  }

  render(props, {value}) {
    return (
      <div>
        <div className="app__input">
          <input
            value={value}
            onInput={linkState(this, 'value')}
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
