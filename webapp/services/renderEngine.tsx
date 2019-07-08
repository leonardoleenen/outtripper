import React from 'react'
import SystemProfile from '../components/SystemProfile';
import ChatSystem from '../components/ChatSystem'
import ChatInput from '../components/ChatInput'
import ChatUser from '../components/ChatUser'
import ChatMultiButton from '../components/ChatMultiButton'

import Hashids from 'hashids'

export interface ProcessNode {
  message: string,
  nextState: string
  stageId: string,
  component: string,
  inputCommand: ProcessNode
}

export interface IEngine {
  process: Map<string, ProcessNode>
  currentStage: string
  renderNode(stage: ProcessNode,params: any)
  renderUserResponse(message:String, avatarUrl)
}

export class RenderEngine implements IEngine {

  renderUserResponse(message: String, urlAvatar: any) {
    return React.createElement(ChatUser,{message, urlAvatar},null)
  }
  
  currentStage: string;
  process: Map<string, ProcessNode>;

  constructor(_process) {
    this.process = _process
    this.currentStage = Object.keys(this.process)[0]
  }

  renderNode(node: ProcessNode , params: any) {
    const hashids = new Hashids(new Date().getTime().toString() +  this.process[this.currentStage]['message'])
    let cType = null
    switch (node['component']) {
      case 'SystemProfile':
        cType = SystemProfile
        break
      case 'ChatSystem':
        cType = ChatSystem
        break
      case 'ChatInput':
        cType = ChatInput
        break
      case 'ChatMultiButton':
        cType = ChatMultiButton
        break
    }

    
    return React.createElement(cType, {
      ...params,
      ...node['params'],
      message: node['message'],
      key: hashids.encode(1,2)
    }, null)
  }

  move(): void {
    this.currentStage = Object.keys(this.process).indexOf(this.currentStage) !=Object.keys(this.process).length ?    
                          Object.keys(this.process)[Object.keys(this.process).indexOf(this.currentStage) + 1] : 
                          null
  }

  getCurrentStage(): string {
    return this.currentStage
  }



}