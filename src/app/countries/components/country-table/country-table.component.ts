import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: `
    :host {
      display: block;
    }

    img {
      width: 35px;
    }
  `,
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = []

}
