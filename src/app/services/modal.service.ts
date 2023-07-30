import { Injectable } from '@angular/core';


//make an interface
interface IModal{
  id:string;
  visible:boolean;
}


@Injectable
(
  {
  providedIn: 'root'
}
)
export class ModalService {
  // private visible=false

  private modals:IModal[]=[]
  constructor() { }


  register(id:string){
    this.modals.push({
      id,visible:false
    })

    
  }
  unregister(id:string){
    this.modals=this.modals.filter(
      elem=>elem.id!==id
    )
  }
  isModalVisible(id:string):boolean{
    // return this.visible
    return !!this.modals.find(elem=>elem.id===id)?.visible
  }
  toggleModal(id:string){
    console.log(id)
    const modal = this.modals.find(elem=>elem.id==id)
    console.log(this.modals)
    if(modal){
      modal.visible=!modal.visible
    }

    // this.visible=!this.visible
  }

}
