import { LightningElement, api } from "lwc";

/**
 * Show an item
 */
export default class Child extends LightningElement {
  @api myName

  onDelete(){
    const childEvent=new CustomEvent('deleteme',{
      detail:{
        id:this.myName
      }
    })
    this.dispatchEvent(childEvent);
  }
  onEdit(){
    const modal=this.template.querySelector("c-modal");
    modal.show();
  }
  // This will receive the {newTaskName:}
  modalTextSender(event){
    const sendNewName=new CustomEvent('sendnametoroot',{
      detail:{
        pos:this.myName,
        TaskName:event.detail.newTaskName
      }
    });
 
    this.dispatchEvent(sendNewName);
  }
}
