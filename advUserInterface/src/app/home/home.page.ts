import { Component } from '@angular/core';
import {LoadingController,
        AlertController,
        ToastController, 
        ActionSheetController,
        NavController,
         } from  '@ionic/angular';

import { Router } from '@angular/router';


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

  constructor(public loadingCtrl: LoadingController, 
    public alertController: AlertController, 
    public toastController: ToastController,
    public actionSheetController: ActionSheetController,
    public navController: NavController,
    public router: Router) {}

  async login(){
    let loading = this.loadingCtrl.create({message: 'Please wait...',spinner: 'circular'});  
    (await loading).present();
      
  setTimeout(async () => {
    (await loading).dismiss();
  }, 3000);


    console.log("Login button clicked");
    console.log("User name : "+this.username);
    console.log("User Password : "+this.password);
    console.log("User type : "+this.usertype);
    console.log("CheckBox : "+this.checkbox);
  }
  cancel(){
    console.log("cancel button clicked");
    this.username="";
    this.password="";
  }
  async alert(){
    console.log("Alert button clicked");
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  
    async toast() {
      const toast = await this.toastController.create({
        message: 'Your settings have been saved.',
        duration: 2000, 
        position: "top",
      });
      toast.present();
  }

  async actionController(){
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  navigate(){
    this.router.navigate(['signup'])
  }
}
