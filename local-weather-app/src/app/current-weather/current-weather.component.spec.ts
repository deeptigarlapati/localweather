import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { CurrentWeatherComponent } from './current-weather.component';
import { WeatherService } from '../weather.service';
import { WeatherServiceFake } from '../weather.service.fake';

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CurrentWeatherComponent ],
      providers: [{ provide: WeatherService,
        useClass: WeatherServiceFake}],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent
    (CurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
