import { html, css, LitElement } from 'lit';
import { blockComponentRender } from '../../content-template-component/src/styles';

export class DemoModalComponent extends LitElement {
  static styles = [
    css`
    :host {
      display: block;
      margin: 25px;
      color: var(--demo-css-component-text-color, #000);
    }`,
    blockComponentRender
  ];

  static properties = {
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <h2>Demo Modal Component</h2>    
    `;
  }
}


customElements.define('demo-modal-component', DemoModalComponent);