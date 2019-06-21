import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'chat-panel',
  styleUrl: 'chat-panel.css',
  shadow: true
})
export class ChatPanel {
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



  /*
  render() {
    return <div class="" >
    <div class="overflow-y-scroll p-4">
    <chat-user-card></chat-user-card>
      <chat-callout-system></chat-callout-system>
      <chat-callout-user></chat-callout-user>
    </div>
      <div class="my-5 p-4 ">
      <chat-button-toggle></chat-button-toggle>
      <chat-button-outlined></chat-button-outlined>
      <chat-button-toggle></chat-button-toggle>
      <chat-button-outlined></chat-button-outlined>
      <chat-button-toggle></chat-button-toggle>
      <chat-button-outlined></chat-button-outlined>
    
      </div >
      <div class=" p-4">
      <chat-select></chat-select>
      <chat-input-pricing></chat-input-pricing>
      
      </div>
      <chat-alert></chat-alert>
      <chat-callout-load></chat-callout-load>

      
    </div>;
  }*/

  render() {
    return <div class="p-2" >
    <slot/>
    </div>;
  }


}
