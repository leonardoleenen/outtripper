import { Component, h } from '@stencil/core';

@Component({
  tag: 'chat-panel',
  styleUrl: 'chat-panel.css',
  shadow: true
})
export class ChatPanel {
  
  componentWillLoad() {
    

  }

  render() {
    return <div class="p-2" >
      <slot/>
    </div>;
  }


}
