import { Component, Prop, h } from '@stencil/core';
import Send from '../../assets/send.svg';

@Component({
  tag: 'chat-input-pricing',
  styleUrl: 'chat-input-pricing.css',
  shadow: true
})
export class ChatInputPricing {
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
    return  <div class="flex flex-col mb-4">
    <label  class="block tracking-wide text-gray-700 text-xs ">Precio</label>
    <div class="flex flex-row">
        <span class="flex items-center bg-grey-lighter rounded rounded-r-none pr-3 font-bold text-red-500">USD</span>
        <input type="number" name="price" class="bg-grey-lighter text-grey-darker py-2 font-normal w-3/4 text-grey-darkest border-b border-grey-lighter rounded-l-none font-bold"/>
        <span class="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-gray-700">
        <img src={Send} class="w-8 h-8"/>
      </span>
        
    </div>
  </div>;
  }
}
