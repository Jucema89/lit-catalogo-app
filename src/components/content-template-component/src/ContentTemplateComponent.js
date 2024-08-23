import "../../demo-css-component/src/DemoCssComponent.js";
import "../../demo-slot-component/src/DemoSlotComponent.js";
import "../../demo-modal-component/src/DemoModalComponent.js";
import "../../demo-render-component/src/DemoRenderComponent.js";
import "../../demo-comunicacion-component/src/DemoComunicacionComponent.js";
import "../../darkmode-select-component/src/DarkmodeSelectComponent.js";

import { html, css, LitElement } from 'lit';
import { CATALOG } from './catalog.js';
import { templateStyles } from './styles.js';

export class ContentTemplateComponent extends LitElement {

  static styles = [
    templateStyles,
    css`
      :host{
        .button {
          background-color: #4CAF50; /* Green */
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
        }
      }
    `
  ];

  static properties = {
    header: { type: String },
    optionSelected: { type: Number },
    typeSeleceted: { type: String},
    optionSelectedName: { type: String },
  };

  constructor() {
    super();
    this.header = 'Catalogo de Aplicaciones';
    this.optionSelected = 0;
    this.optionSelectedName = '';
    this.typeSeleceted = 'style'
  }

  onOptionSelected(event, id, type = 'style'){
    this.optionSelected = id;
    this.optionSelectedName = event?.target.innerHTML;
    this.typeSeleceted = type
  }

  get modalComponent(){
    return this.shadowRoot.querySelector('demo-modal-component')
  }

  onOpenModal(){
    this.modalComponent.openModal()
  }

  render() {
    return html`
      <main class="container">
        <section class="header">
          <h1>${this.header}</h1>
          <dark-mode-select></dark-mode-select>
        </section>
        
        <section class="body">
          <ul class="list-component">
            ${CATALOG.map((item) => {
              return html`
                <li>
                  <a @click="${(e) => {this.onOptionSelected(e, item.id, item.type)} }"
                  class="${this.optionSelected === item.id ? 'active' : ''}">
                  ${this.optionSelected === item.id ? "✅" : item.icon }
                  ${item.title}
                  </a>
                </li>
              `;
            })}
          </ul>
          <aside>
            ${this.renderDemoComponent()}
          </aside>
        </section>
      </main>
    `;
  }

  conditionalRender(id){
    const components = {
      4: html`<demo-slot-component>
        <p slot="one">Soy one</p>
        <p slot="two">Soy otro</p>
      </demo-slot-component>`,
      5: html`
        <buton class="button" @click=${this.onOpenModal} >Open My Modal</buton>
        <demo-modal-component>
          <div>
            <p>This is Body into SLOT</p>
          </div>
        </demo-modal-component>`,
      6: html`<demo-render-component></demo-render-component>`,
      7: html`<demo-comunicacion-component></demo-comunicacion-component>`
    }
    return components[id]
  }

  renderDemoComponent(){
    if(this.typeSeleceted === 'style'){
      return html`
      <demo-css-component .case=${this.optionSelected}></demo-css-component>
     `;
    } else {
      return this.conditionalRender(this.optionSelected)
    }
   
  }
}
