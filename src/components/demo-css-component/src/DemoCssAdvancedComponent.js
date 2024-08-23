import { html, css, LitElement } from 'lit';
import { blockComponentRender } from '../../content-template-component/src/styles';

export class DemoCssAdvancedComponent extends LitElement {
  static styles = [
    blockComponentRender,
    css`
    :host-context(.dark-theme){
      background-color: darkblue;
      color: white;
    }
    
    `]
  ;

  static properties = {
  };

  constructor() {
    super();
  }


  render() {
    return html`
      <h2>CSS avanzado</h2>
      <p>Contextual Style example</p>
    `;
  }
}

customElements.define('css-advanced-component', DemoCssAdvancedComponent);
