(function() {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
      img {
      }
    </style>
    <div id="container" />
  `;

  class PlaceKittens extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({mode: 'open'});
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {

      const container = this.shadowRoot.getElementById('container');
      const number = parseInt(this.getAttribute("number"));

      new Array(number).fill().forEach(index => {

        const width = parseInt(Math.random() * 300 + 50);
        const height = parseInt(Math.random() * 300 + 50);

        const placeKitten = document.createElement('place-kitten');
        placeKitten.setAttribute('width', height);
        placeKitten.setAttribute('height', width);

        container.appendChild(placeKitten);

      });
    }
  }

  window.customElements.define('place-kittens', PlaceKittens);
})();