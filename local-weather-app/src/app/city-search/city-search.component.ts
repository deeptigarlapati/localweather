import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
// import { from } from 'rxjs';
@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  
  search = new FormControl('', [Validators.minLength(2)]);
  @Output() searchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe((searchValue: string) => {
      if (!this.search.invalid){
        this.searchEvent.emit(searchValue)
      }
    })
  }

}
