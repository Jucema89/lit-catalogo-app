import { html, css, LitElement } from 'lit';
import './DemoCssBasicComponent.js';
import './DemoCssIntermediateComponent.js';
import './DemoCssAdvancedComponent.js';

export class DemoCssComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--demo-css-component-text-color, #000);
    }
  `;

  static properties = {
    case: { type: Number },
  };

  constructor() {
    super();
  }

  render() {
    return this.conditionalRender(this.case)
  }

  conditionalRender(id){
    const components = {
      1: html`<css-basic-component></css-basic-component>`,
      2: html`<css-intermediate-component></css-intermediate-component>`,
      3: html`
      <div class="dark-theme">
        <css-advanced-component></css-advanced-component>
      </div>`
    }
    return components[id]
  }
}

customElements.define("demo-css-component", DemoCssComponent)
