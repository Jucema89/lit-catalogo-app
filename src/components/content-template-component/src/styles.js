import { css } from "lit";

/**
 * Styles Grls for block container render data alls components
 */
export const blockComponentRender = css`
  :host {
    display: block;
    background-color: var(--background-color, white);
    color: var(--color-text, black);
    padding: 16px;
    border-radius: 8px;
  }
`;


export const templateTitle = css`
  :host{
    .header {
     
    }
  }
`

export const templateStyles = css`
    :host {
      
      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1rem;
        flex-wrap: nowrap;
        align-items: center;
        height: 100vh;
        width: 80vw;
        overflow: hidden;

        .header{
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: start;
          width: 100;
          gap: 1rem;

          h1 {
            text-align: center;
            font-size: 1.5rem;
            color: var(--color-text, black);
            font-weight: 500;
          }
        }

        .body {
          display: grid;
          grid-template-columns: 1fr 3fr;
          justify-content: space-between;
          

          .list-component {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            width: 100%;
            align-items: stretch;
            flex-wrap: nowrap;
            justify-content: center;


            li {
              list-style: none;
              cursor: pointer;

              a {
                display: flex;
                flex-direction: row;
                background-color: var(--background-color, white);
                color: var(--color-text, black);
                padding: 1rem 2rem;
                border-radius: 15px;
                width: 200px;
                font-size: 1rem;

                &:hover {
                  background-color: #ddfeff;
                  box-shadow: 0px 10px 15px -3px var(--shadow-bg, rgba(0,0,0,0.1));
                }
              }

              .active {
                background-color: #abfafd;
                color: #001f63;
                font-weight: 600;
                box-shadow: 0px 10px 15px -3px var(--shadow-bg, rgba(0,0,0,0.1));
              }
            }
          }
        }
      }
    }
  `;