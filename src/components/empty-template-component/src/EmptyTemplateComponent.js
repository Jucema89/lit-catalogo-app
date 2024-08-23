import { html, css, LitElement } from 'lit';
import { blockComponentRender } from '../../content-template-component/src/styles';

export class EmptyTemplateComponent extends LitElement {
  static styles = [
    blockComponentRender,
    css`
    :host{
      display: flex;
      flex-direction: column;
      justify-content: center;
      div{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        align-items: center;
        img {
          width: 300px;
          height: auto
        }
      }
      
    }`
  ];


  static properties = {
  };

  constructor() {
    super()
  }

  render() {
    return html`
      <div>
        <h2>Insertar Empty State</h2>
        <img width="300px" height="auto" src="assets/wtf-empty.gif" />
        <button>Ir a crear algo</button>
      </div>
    `;
  }
}

customElements.define('empty-template-component', EmptyTemplateComponent);
