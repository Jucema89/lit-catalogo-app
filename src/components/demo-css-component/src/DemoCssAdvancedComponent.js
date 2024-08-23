import { html, css, LitElement } from 'lit';
import { blockComponentRender } from '../../content-template-component/src/styles';

export class DemoCssAdvancedComponent extends LitElement {
  static styles = [
    blockComponentRender,
    css``]
  ;

  static properties = {
  };

  constructor() {
    super();
  }


  render() {
    return html`
      <h2>CSS avanzado</h2>
    `;
  }
}

customElements.define('css-advanced-component', DemoCssAdvancedComponent);
