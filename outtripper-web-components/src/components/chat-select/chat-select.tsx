import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'chat-select',
  styleUrl: 'chat-select.css',
  shadow: true
})
export class ChatSelect {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;



  render() {
    return  <div class="mb-4">
    <label class="block tracking-wide text-gray-700 text-xs  " >
      Cantidad de pescadores
    </label>
    <select class="block  bg-white border-b border-gray-400 hover:border-gray-500 px-4 py-2  rounded leading-tight focus:outline-none focus:shadow-outline">
    <option>1</option>
    <option> 2</option>
    <option> 3</option>
  </select>

  </div>;
  }
}
