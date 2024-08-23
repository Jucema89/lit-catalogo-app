import { html, css, LitElement } from 'lit';
import { blockComponentRender } from '../../content-template-component/src/styles';

export class DemoRenderComponent extends LitElement {
  static styles = [
    css`
    :host {
      display: block;
      margin: 25px;
      color: var(--demo-css-component-text-color, #000);
    }`,
    blockComponentRender,
  ];

  static properties = {
  };

  constructor() {
    super()
  }
 
  render() {
    return html`
    <h2>Demo Render Component</h2>
    `;
  }
}

customElements.define('demo-render-component', DemoRenderComponent);
