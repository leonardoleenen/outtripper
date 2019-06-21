import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'chat-button',
  styleUrl: 'chat-button.css',
  shadow: true
})
export class ChatButton{
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
    return <button class="bg-transparent text-center text-red ">
   Continuar
  </button>;
  }
}
