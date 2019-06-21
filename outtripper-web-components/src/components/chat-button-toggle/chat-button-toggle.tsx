import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'chat-button-toggle',
  styleUrl: 'chat-button-toggle.css',
  shadow: true
})
export class ChatButtonToggle {
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
    return <button class="bg-red-500 mb-2 self-auto  w-1/4 border border-red-500  text-white border tracking-wide uppercase  mr-2  py-2 px-2 rounded opacity-25 cursor-not-allowed">
   Buceo
  </button>;
  }
}
