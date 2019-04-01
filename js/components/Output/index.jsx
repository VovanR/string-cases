import {h, Component} from 'preact';

function copy({target}) {
  target.select();
  document.execCommand('copy');
}

export default class Input extends Component {
  render({value, placeholder}) {
    return (
      <input
        value={value}
        placeholder={placeholder}
        onClick={copy}
        readOnly
      />
    );
  }
}
