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
    <h2>Css Basico</h2>
    <p>
      Los estilos se agregan automaticamente al scope del shadow-root
    </p>
    
    <deckgo-highlight-code language="javascript">
      <code slot="code">
      export class DemoModalComponent extends LitElement {
        static styles = css'
        p {
          color: green;
        }
        '
      }
      </code>
    </deckgo-highlight-code>
    `;
  }
}

customElements.define('css-basic-component', DemoCssBasicComponent);
