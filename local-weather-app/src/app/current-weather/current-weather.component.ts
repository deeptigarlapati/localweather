import { Component, OnInit, Input } from '@angular/core';
import {ICurrentWeather} from '../icurrent-weather';
import {FormControl} from '@angular/forms';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {
  @Input() current: ICurrentWeather
  constructor(private weatherService: WeatherService) {
    
   }
//Angular on initialize - ngOnInit
  ngOnInit() {
    // this.weatherService.getCurrentWeather('Redmond','US')
    // .subscribe(data => this.current = data)
  }

}
