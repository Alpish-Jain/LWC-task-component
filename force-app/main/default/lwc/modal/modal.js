import {LightningElement,api} from 'lwc';

//const CSS_CLASS="modal-hidden"

export default class Modal extends LightningElement{
  showModal=false
  newTaskName
  @api show(){
    this.showModal=true;
  }
  handleDialogClose(){
    this.showModal=false;
    const modalOutput=new CustomEvent('sendoutput',{
      detail:{
        newTaskName:this.newTaskName
      }
    })
    this.dispatchEvent(modalOutput);
  }
  handleTask(event){
    this.newTaskName=event.target.value
    console.log(this.newTaskName)
  }
}