import { Component, Prop, h } from '@stencil/core';
import StarFill from '../../assets/star_fill.svg';
import Star from '../../assets/star.svg';


@Component({
  tag: 'chat-user-card',
  styleUrl: 'chat-user-card.css',
  shadow: true
})
export class ChatUserCard {
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
    return <div class="max-w-sm rounded overflow-hidden mt-24  m-auto mb-24">
    <img class="w-32 h-32 rounded-full mb-2  shadow-xl m-auto" src="https://i.vimeocdn.com/portrait/11968448_640x640" alt=""/>
    <div class="px-6 py-4 text-center">
      <div class=" text-xl mb-2">Leonardo G. Leenen</div>
      <div class="flex text-center mb-2 content-center items-center justify-center" >
      <img src={Star} class="w-4 h-4 text-red-500 mr-2 fill-current "  />
      <img src={Star} class="w-4 h-4 text-red-500 mr-2"  />
      <img src={Star} class="w-4 h-4 text-red-500 mr-2"  />
      
      <img src={StarFill} class="w-4 h-4 text-red-500 mr-2"  />
      <img src={StarFill} class="w-4 h-4 text-red-500 mr-2 "   />
     </div>
      <p class="text-gray-700 text-base">Personal Sale Assitant </p>
    </div>
   
  </div>;
  }
}
