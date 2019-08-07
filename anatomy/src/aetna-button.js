import React from 'react';
import ReactDOM from 'react-dom';
import ButtonContent from './anatomy/ButtonContent';

class AetnaButton extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: 'open'});

    const props = {};
    for(let i = 0; i < this.attributes.length ; i++) {
      const {name, value = true} = this.attributes[i];
      props[name] = value;
    }
    ReactDOM.render(<ButtonContent {...props} />, this.shadowRoot);
  }
}
window.customElements.define('aetna-button', AetnaButton);