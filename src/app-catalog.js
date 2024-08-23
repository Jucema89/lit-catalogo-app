import { LitElement, html, css } from 'lit';
import './components/content-template-component/content-template-component.js';

class AppCatalog extends LitElement {
  static properties = {
  }

  static styles = css`
    :host {
      overflow: hidden;
      margin: 0;
      padding: 0;
      background-color: #f3f4f6;
      color: black;
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