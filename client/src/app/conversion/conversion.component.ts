import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConversionService } from '../conversion.service';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  providers: [ConversionService]
})
export class ConversionComponent implements OnInit {

  @Input() conversion;
  @Output() refreshEvent = new EventEmitter();

  constructor(private conversionService: ConversionService ) { }

  ngOnInit() {
  }
  updateConversion( obj: any ): void {
    this.conversion.rate = obj.rate;
    this.conversionService.updateConversion(this.conversion).subscribe((result) => {
      console.log(result);
      this.conversion = result;
    });
  }

  deleteConversion(): void {
    this.conversionService.deleteConversion(this.conversion._id).subscribe(() => {
      this.refreshEvent.emit();
    });
  }
}
