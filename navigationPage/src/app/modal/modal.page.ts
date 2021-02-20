import { Component, Input, OnInit } from '@angular/core';
import {ModalController} from   '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;

  constructor(public modallCtrl:ModalController) { 
  }

  closeModal(){
    this.modallCtrl.dismiss({
      'dismissed': true
    });
  }
  
  
  ngOnInit() {
  }

}
