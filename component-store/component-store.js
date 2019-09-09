import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `component-store`
 * Component Store for flicktrip
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ComponentStore extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'component-store',
      },
    };
  }
}

window.customElements.define('component-store', ComponentStore);
