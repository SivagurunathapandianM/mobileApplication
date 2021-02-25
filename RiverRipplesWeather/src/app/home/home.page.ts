import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {LoadingController} from   '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weatherInfo :object;
  cityName :string;

  constructor(public httpClient: HttpClient, public loadingController: LoadingController) {
    this.getWeatherdata();
  }

  async getWeatherdata(){
    let loading = this.loadingController.create({message: 'Loading',spinner: 'circular'});  
    (await loading).present();
    setTimeout(async () => {
      (await loading).dismiss();
    }, 500);
  
    this.httpClient.get("http://api.openweathermap.org/data/2.5/weather?q="+this.cityName+"&appid=adcbdf10756ee9c89453d30532a955ee")
    .subscribe(data => {
      console.log("Example Restapi get call:"+data);
     
     this.weatherInfo = data;
      
     }, error => {
      console.log(error); 
    });
  }
}
