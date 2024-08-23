import { html, css, LitElement } from 'lit';
import { blockComponentRender } from '../../content-template-component/src/styles';

export class DemoCssIntermediateComponent extends LitElement {
  static styles = [
    blockComponentRender,
    css``
  ]
  ;

  static properties = {
  };

  constructor() {
    super();
  }

  render() {
    return html`
    <h2>CSS Intermedio</h2>
    `;
  }
}

customElements.define('css-intermediate-component', DemoCssIntermediateComponent);
