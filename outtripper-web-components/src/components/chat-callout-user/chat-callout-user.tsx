import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'chat-callout-user',
  styleUrl: 'chat-callout-user.css',
  shadow: true
})
export class ChatCalloutUser{
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
    return <div class="flex items-center mb-4 ">
     <div class="text-sm bg-red-500 w-full p-4 mr-4 rounded-lg" >
      <p class="text-white leading-none">Jonathan Reinink</p>
      <p class="text-white">Aug 18</p>
    </div>
    <img class="w-10 h-10 rounded-full " src="https://pbs.twimg.com/profile_images/953209666149994496/Nrna76mP.jpg"/>
   
  </div>;
  }
}
