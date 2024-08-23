import { html, css, LitElement } from 'lit';
import { blockComponentRender } from '../../content-template-component/src/styles';

export class DemoSlotComponent extends LitElement {
  static styles = [
    css`
    :host {
      display: block;
      margin: 25px;
      color: var(--demo-css-component-text-color, #000);

      .class-one {
        background-color: lightcoral;
      }

      .class-two {
        background-color: lightblue;
      }

      .class-three {
        background-color: lightgreen;
      }
    }`,
    blockComponentRender,
  ];

  static properties = {
  };

  constructor() {
    super()
  }

  render() {
    return html`
      <h2>Slots Elements</h2>
      <h1 class="class-one">
        <slot name="one" ></slot>
      </h1>
      <h2 class="class-two">
        <slot name="two" ></slot>
      </h2>
      <h3 class="class-three"></h3>
        <slot name="three"></slot>
      </h3>
      
      
    `;
  }
}

customElements.define('demo-slot-component', DemoSlotComponent);
