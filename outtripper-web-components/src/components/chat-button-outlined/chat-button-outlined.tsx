import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'chat-button-outlined',
  styleUrl: 'chat-button-outlined.css',
  shadow: true
})
export class ChatButtonOutlined {
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
    return <button class="bg-transparent self-auto mb-2 w-1/4 mr-2 hover:bg-red-500 text-red-700 tracking-wide  uppercase hover:text-white py-2 px-2 border border-red-500 hover:border-transparent rounded">
   Pesca
  </button>;
  }
}
