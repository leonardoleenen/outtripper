import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'chat-callout-load',
  styleUrl: 'chat-callout-load.css',
  shadow: true
})
export class ChatCalloutLoad {
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
    return <div class="flex  mb-4 ">
 <div class='load-wrap'>
		<div class='load-3'>
		
			<div class='line bg-gray-500'></div>
			<div class='line  bg-gray-500'></div>
			<div class='line  bg-gray-500'></div>
		</div>
	</div>
  </div>;
  }
}
