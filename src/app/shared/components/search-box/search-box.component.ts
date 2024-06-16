import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, input } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { serialize } from 'v8';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SearchBoxComponent implements OnInit, OnDestroy {


  //Es un tipo especial de observable
  private debouncer: Subject<string> = new Subject<string>();

  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string  = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(1000)
    )
    .subscribe( value => {
      this.onDebounce.emit( value );
    })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  emitValue( value:string): void {
    this.onValue.emit( value );
  }

  onKeyPress( searchTerm: string) {
    this.debouncer.next( searchTerm );
  }

 }
