import { LightningElement } from 'lwc';
export default class MyFirstWebComponent extends LightningElement {
  
   taskMessage=''
   tasks=[{
     id:1,
     message:"Task 1"
   },
   {
     id:2,
     message:"Task 2"
   },
   
   ]
   handleChange(event){
     this.taskMessage=event.target.value
     console.log('Hello')

   }
  
   createTask(event){
     this.tasks.push({
       id:this.tasks.length+1,
       message:this.taskMessage
     })
    this.taskMessage=""
    console.log(this.tasks)

   }
   deleteHandler(event){
     this.tasks=this.tasks.filter((obj)=>event.detail.id!=obj.id)
     //var deleted= delete this.tasks[event.detail.id-1]
      console.log('deleted')
      console.log(this.tasks)
   }
   editHandler(event){
     console.log(event.detail)
   }
   changeTask(event){
  
     this.tasks=this.tasks.map((obj)=>{
       if(obj.id===event.detail.pos)
            obj.message=event.detail.TaskName
          
        return obj
     })
   }

}