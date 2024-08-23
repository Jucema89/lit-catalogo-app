import "../../demo-css-component/src/DemoCssComponent.js";
import "../../demo-slot-component/src/DemoSlotComponent.js";
import "../../demo-modal-component/src/DemoModalComponent.js";
import "../../demo-render-component/src/DemoRenderComponent.js";
import "../../demo-comunicacion-component/src/DemoComunicacionComponent.js";

import { html, css, LitElement } from 'lit';
import { CATALOG } from './catalog.js';
import { templateStyles } from './styles.js';

export class ContentTemplateComponent extends LitElement {

  static styles = [
    templateStyles
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

  render() {
    return html`
      <main class="container">
        <section class="header">
          <h1>${this.header}</h1>
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
      4: html`<demo-slot-component></demo-slot-component>`,
      5: html`<demo-modal-component></demo-modal-component>`,
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
