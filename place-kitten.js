const template = document.createElement('template');
template.innerHTML = `
  <style>
    img {
      margin: .25rem;
      padding: 1rem;
      border: solid .125rem #ccc;
      background: white;
    }
  </style>
  <img
    id="img"
    alt="A super cute kitten"
  />
`;

class PlaceKitten extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const width = this.getAttribute('width');
    const height = this.getAttribute('height');
    const src = `https://placekitten.com/${width}/${height}`;
    this.shadowRoot.getElementById('img').setAttribute('src', src);
  }
}

window.customElements.define('place-kitten', PlaceKitten);