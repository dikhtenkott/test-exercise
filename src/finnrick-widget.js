import styles from './style.css?inline'
import logo from './logo.svg?inline'

const ratingText = {
  a: 'great',
  b: 'good',
  c: 'normal',
  d: 'bad',
}

const renderCard = (data, rating) => {
  const ratingVal = rating in ratingText ? rating: 'c'
  return `
    <div class="card">
      <div class="row card-header">
        <h4 class="name">Finnrick Rating™</h4>
        <div class="tooltip">
          <div class="icon">?</div>
          <div class="content">${data.tooltip}</div>
        </div>
      </div>
      <hr/>
      <div class="row mobile-column">
        <div class="rating ${ratingText[ratingVal]}">
          <div class="number">${ratingVal}</div>
          <div class="text">${ratingText[ratingVal]}</div>
        </div>
        <div class="info">
          <h4 class="title">${data.vendor}</h4>
          <h4 class="title">${data.product}</h4>
          <p class="count">Tested ${data.samples} Samples</p>
          <p class="date">Last test ${data.date}</p>
        </div>
      </div>
      <hr/>
      <img class="logo" src="${logo}" height="32" alt="Finnrick Analytics">
    </div>
  `
}

class FinnrickWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Ideally fetch dynamic data here, for demo use static:
    const data = {
      tooltip: 'Tooltip content long text, Tooltip content long text, Tooltip content long text',
      vendor: 'Shanghai Innovy Chemical New Materials',
      product: 'Tesamorelin, CJC&#8209;1295, Ipamorelin',
      samples: 6,
      date: '19 Feb 2025',
    };

    const rating = this.getAttribute('data-rating');

    this.shadowRoot.innerHTML = `
      <style>${styles}</style>
      ${renderCard(data, rating)}
    `
  }
}

customElements.define('finnrick-widget', FinnrickWidget);
