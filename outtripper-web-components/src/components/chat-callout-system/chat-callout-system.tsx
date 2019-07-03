import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'chat-callout-system',
  styleUrl: 'chat-callout-system.css',
  shadow: true
})
export class ChatCalloutSystem {
 
  @Prop() urlAvatar: string 
  @Prop() message: string

  render() {
    return <div class="flex items-center mb-4 ">
    <img class="w-10 h-10 rounded-full mr-4" src={this.urlAvatar}/>
    <div class="text-sm bg-gray-300 w-full p-4 rounded-lg" >
      <p class="text-gray-900 leading-none">{this.message}</p>
      <p class="text-gray-600">Aug 18</p>
    </div>
  </div>;
  }
}
