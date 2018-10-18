(function() {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      button {
        padding: 1rem;
        background: white;
        font-size: 1rem;
        box-shadow: .25rem .25rem .25rem #ccc;
      }
    </style>
    <button id="requestButton">Moar Kitten Please</button>
    <div id="container" />
  `;

  class RequestACat extends HTMLElement {
    constructor() {
      super();

      this.handleButtonClick = this.handleButtonClick.bind(this);

      this.attachShadow({mode: 'open'});
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      const button = this.shadowRoot.getElementById('requestButton');
      button.addEventListener('click', this.handleButtonClick);
    }

    handleButtonClick() {
      const width = parseInt(Math.random() * 300 + 50);
      const height = parseInt(Math.random() * 300 + 50);

      const placeKitten = document.createElement('place-kitten');
      placeKitten.setAttribute('width', height);
      placeKitten.setAttribute('height', width);

      const container = this.shadowRoot.getElementById('container');
      container.insertBefore(placeKitten, container.firstChild);
    }
  }

  window.customElements.define('request-a-cat', RequestACat);
})();