import { html, css, LitElement } from 'lit';

export class DarkmodeSelectComponent extends LitElement {
  static styles = css`
    input {
      display: none;
    }

    label {
      display: flex;
      align-items: center;
      width: 40px;
      height: 10px;
      padding: 8px 4px;
      border-radius: 100px;
      background-color: MediumSeaGreen;
      cursor: pointer;
    }

    span {
      height: 20px;
      width: 20px;
      border-radius: 100%;
      transition: 0.5s;
      background-color: white;
      margin-left: 0px;
    }

    label:has(input:checked) {
      background-color: #abfafd;
      span {
        background-color: #1a4064
      }
    }

    /* span:has(input:checked){
      background-color: MediumSeaGreen
    } */

    input:checked + span {
      margin-left: calc(100% - 20px);
      transition: 0.5s;
    }
  `;

  static properties = {
    checked: { type: Boolean }
  };

  constructor() {
    super();
    this.checked = false
  }

  toggle(){
    this.checked = !this.checked
    this.changeBodyBackground()
  }

  changeBodyBackground(){
    window.document.body.style.backgroundColor = this.checked ? "black" : "#f3f4f6";
    window.document.body.style.transition = "0.5s";
    window.document.body.style.color = this.checked ? "white" : "black"

    const root = document.documentElement;
    window.document.body.style.transition = "0.5s";
    root.style.setProperty('--color-text', this.checked ? 'white' : 'black');
    root.style.setProperty('--background-color', this.checked ? 'rgba(64, 64, 64, .7)' : 'white');
  }
 

  render(){
    return html`
     <label for="toggle">
        <input id="toggle" type="checkbox" @change=${this.toggle}/>
        <span></span>
      </label>
    `;
  }
}

customElements.define("dark-mode-select", DarkmodeSelectComponent)
