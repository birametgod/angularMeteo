import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-meteo-ville',
  templateUrl: './meteo-ville.component.html',
  styleUrls: ['./meteo-ville.component.css']
})
export class MeteoVilleComponent implements OnInit {

  @Input() dataWeather : any;
  constructor() { }

  ngOnInit() {
    console.log(this.dataWeather);
    this.putDescription();
    //this.dataWeather.main.temp = Math.round(this.dataWeather.main.temp - 273.15);
  }

  putDescription() : void {
    console.log('detail meteo',this.dataWeather)
    this.dataWeather.weather.forEach(element => {
      console.log(element.description);
    });
  }

  weatherIcon(icon) {
    switch (icon) {
      case 'light rain':
        return 'wi wi-day-rain-wind'
      case 'clear sky':
        return 'wi wi-day-sunny'
      case 'broken clouds':
        return 'wi wi-cloudy'
      case 'partly-cloudy-night':
        return 'wi wi-night-partly-cloudy'
      default:
        return `wi wi-day-sunny`
    }
  }


  kToF(kTemp:number) : number {
    let kToCel = ((kTemp - 273.15)*1.8)+32;
    return Math.round(kToCel);
  }

  kToC(kTemp:number) : number {
  let kToCel = kTemp - 273.15;
  return Math.round(kToCel);
  }

}
