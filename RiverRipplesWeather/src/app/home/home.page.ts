import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IonSlides,LoadingController} from   '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weatherInfo: object;
  cityforcastweatherinfo :any;

  cityName: string;
  cityId: any;
  temperature: any;
  @ViewChild('slides') slides: IonSlides;
  
  
  constructor(public httpClient: HttpClient, public loadingController: LoadingController) {
    this.getWeatherdata();
  }

  

  async getWeatherdata(){

    //Loading controller for user interface
    let loading = this.loadingController.create({message: 'Loading',spinner: 'circular'});  
    (await loading).present();
    setTimeout(async () => {
      (await loading).dismiss();
    }, 500);
  
    //Getting the weather information for specific city
    this.httpClient.get("http://api.openweathermap.org/data/2.5/weather?q="+this.cityName+"&appid=adcbdf10756ee9c89453d30532a955ee")
    .subscribe(data => 
    {
      this.weatherInfo = data;
          for (const [key, value] of Object.entries(data)) 
          {
              if (key == 'id'){
                //console.log(`${key}: ${value}`);
                this.cityId = value;
              }
              if (key == 'main'){
                for (const [key, values] of Object.entries(value)) {
                  if (key == 'temp'){
                    this.temperature =values;
                    this.temperature = (this.temperature-273.15);
                    this.temperature =("" + parseFloat(this.temperature)).substring(0, 3);
                  }
                  // if (key == 'pressure'){
                  //   this.pressure =values;
                  // }
                  // if (key == 'humidity'){
                  //   this.humidity =values;
                  // }
                }
              }
          }

          
              //Getting forcast of specific city
              this.httpClient.get("http://api.openweathermap.org/data/2.5/forecast?id="+this.cityId+"&appid=adcbdf10756ee9c89453d30532a955ee")
              .subscribe(forecastData => {

              //  console.log("Forecast data : "+JSON.stringify(forecastData));
               
                for (const [key, value] of Object.entries(forecastData)) 
                {
                  if (key == 'list')
                  {
                    this.cityforcastweatherinfo = value;
                  }
                }
                console.log("Forecast List data : "+JSON.stringify(this.cityforcastweatherinfo));
               
               

              }, error => {
                console.log(error); 
              });
      }, error => {
        console.log(error); 
    });



  }


  getTemperature(weatherInfo: object) {
   // console.log("Weather info "+this.weatherInfo);
    // this.cityweatherinfo=JSON.stringify(data);
   
    return this.temperature;
  }

  slidePrev() {
    this.slides.slidePrev();
  }
  slideNext() {
    this.slides.slideNext();
  } 
}
