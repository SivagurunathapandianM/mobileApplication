import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NavparamService} from '../navparam.service';
import {ModalController} from   '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from '../popover/popover.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string ="";
  password: string ="";
  usertype: any;
  checkbox: boolean;

  constructor(public popoverController: PopoverController,private router: Router,private navparamservice:NavparamService,public modalcontroller:ModalController) {}
    
  async start() {
    console.log("Username: "+this.username);
    let d ={
      'hero' : 'Mark Zuckerberg',
      'Company' : 'Facebook'
    }
    this.navparamservice.setNavData(d);
    this.router.navigate(['signup']);
    // this.router.navigate(['signup/'+JSON.stringify(d)]);
  
   // this.router.navigate(['signup/'+this.username]);
  }

  async openModal(){
    const modal = await this.modalcontroller.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });

  
    return await modal.present();

  }

  async presentPopover(myEvent: any) {
    const popover = await this.popoverController.create({
      component: PopoverPage,
      cssClass: 'my-custom-class',
      event: myEvent,
      translucent: true
    });
    return await popover.present();
  }

}
