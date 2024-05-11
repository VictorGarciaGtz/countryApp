import { Component, ElementRef, ViewChild } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService: CountriesService){

  }

  @ViewChild('TxtSearchInput')
  public txtSeach!: ElementRef<HTMLInputElement>;

  searchByCapital( term: string ){
    this.countriesService.searchCapital( term )
    .subscribe( countries => {
      this.countries = countries;
    } );
  }
}
