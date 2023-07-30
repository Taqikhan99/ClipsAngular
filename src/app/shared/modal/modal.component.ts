import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  // providers:[ModalService]
})
export class ModalComponent implements OnInit {
  @Input() modalID='' 
  constructor( public modal:ModalService) {
    
   }

  ngOnInit(): void {
  }

  closeModal($event:Event){
    console.log(this.modalID)
    $event.preventDefault()
    this.modal.toggleModal(this.modalID)
  }
}
