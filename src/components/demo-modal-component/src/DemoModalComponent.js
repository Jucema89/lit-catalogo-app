import { html, css, LitElement } from 'lit';
import '../../empty-template-component/src/EmptyTemplateComponent.js'
import { blockComponentRender } from '../../content-template-component/src/styles';

export class DemoModalComponent extends LitElement {
  static styles = [
    css`
    :host {
      display: block;
      margin: 25px;

      .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);
      }

      .modal.show {
        display: block;
      }

      .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
      }

      .close-button {
        margin-top: 10px;
        padding: 10px;
        background-color: #000000;
        color: white;
        border: none;
        cursor: pointer;
      }

    }`,
   // blockComponentRender
  ];

  static properties = {
    show: { type: Boolean }
  };

  constructor() {
    super();
    this.show = false;
  }


  closeModal(){
    this.show = false;
  }

  openModal(){
    this.open = true;
  }

  render() {
    return html`
      <div class="modal ${this.open ? 'show' : ''}">
        <div class="modal-content">
          <h2>I'm header</h2>

          <div class="modal-body">
            <slot></slot>
          </div>

          <button class="close-button" @click=${this.closeModal}>Close</button>

        </div>
      </div>
    `;
  }
}


customElements.define('demo-modal-component', DemoModalComponent);