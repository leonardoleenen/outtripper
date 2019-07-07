import React from 'react'
import  SystemProfile from '../components/SystemProfile';

export interface ProcessNode {
    message:string,
    nextState: string
    stageId: string,
    component: string
}

export interface IEngine {
    process: Map<string,ProcessNode>
    currentState: string
    renderNode()
}

export class RenderEngine implements IEngine {
    currentState: string;
    process: Map<string, ProcessNode>;   
    
    constructor(_process) {
        this.process= _process
        this.currentState=null
        this.currentState = Object.keys(this.process)[0]
    }
    

    renderNode() {
        return  React.createElement(SystemProfile, {
            userName: 'Williams',
            key:'id'
          },null)
    }

    move():void {

    }

    getCurrentStage():string {
        return this.currentState
    }

}