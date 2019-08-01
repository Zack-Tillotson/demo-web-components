import React from 'react';
import ReactDOM from 'react-dom';
import Button, {styles} from './anatomy/button.js';

class AetnaButton extends HTMLButtonElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});

    const props = {}; // TODO
    ReactDOM.render(<Button {...props} />, this.shadowRoot);
  }
}

window.customElements.define('aetna-button', AetnaButton);