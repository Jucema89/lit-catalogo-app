import { html, css, LitElement } from 'lit';
import { blockComponentRender } from '../../content-template-component/src/styles';

export class EmptyTemplateComponent extends LitElement {
  static styles = [
    blockComponentRender,
    css``
  ];


  static properties = {
  };

  constructor() {
    super()
  }

  render() {
    return html`
      <h2>Empty State</h2>
    `;
  }
}

customElements.define('empty-template-component', EmptyTemplateComponent);
