import React from 'react';
import ReactDOM from 'react-dom';
import ButtonContent from './anatomy/ButtonContent';

class AetnaButton extends HTMLElement {
  connectedCallback() {

    this.attachShadow({mode: 'open'});

    const props = {children: this.innerHTML};
    ReactDOM.render(<ButtonContent {...props} />, this.shadowRoot);
  }
}

window.customElements.define('aetna-button', AetnaButton);