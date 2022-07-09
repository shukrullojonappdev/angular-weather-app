import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
import {
  faTemperatureHigh,
  faTemperatureLow,
  faDroplet,
  faWind,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  cityName: string = 'Tashkent';
  weatherData?: WeatherData;

  faTemperatureHigh = faTemperatureHigh;
  faTemperatureLow = faTemperatureLow;
  faDroplet = faDroplet;
  faWind = faWind;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (res) => {
        this.weatherData = res;
        console.log(res);
      },
    });
  }
}
