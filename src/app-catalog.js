import { LitElement, html, css } from 'lit';
import './components/content-template-component/content-template-component.js';

class AppCatalog extends LitElement {
  static properties = {
  }

  static styles = css`
    :host {
      margin: 0;
      padding: 0;
      background-color: #f3f4f6;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
    <content-template-component></content-template-component>
    `;
  }
}

customElements.define('app-catalog', AppCatalog);