import { html, css, LitElement } from 'lit';
import { blockComponentRender } from '../../content-template-component/src/styles';
import '../../empty-template-component/src/EmptyTemplateComponent.js'

export class DemoCssBasicComponent extends LitElement {
  static styles = [
    blockComponentRender,
    css``
  ];

  static properties = {
  };

  constructor() {
    super();
  }

  render() {
    return html`
    <empty-template-component></empty-template-component>
    `;
  }
}

customElements.define('css-basic-component', DemoCssBasicComponent);
