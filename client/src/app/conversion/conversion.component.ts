import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html'
})
export class ConversionComponent implements OnInit {

  @Input() conversion;

  constructor() { }

  ngOnInit() {
  }

}
