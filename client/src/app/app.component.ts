import { Component } from '@angular/core';
import { ConversionService } from './conversion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ConversionService]
})
export class AppComponent {
  title = 'project';

  constructor(private conversionService: ConversionService ) {
  }

  conversionList = null;
  ratesTimestamp = null;

  ngOnInit() {
    this.conversionService.listConversions().subscribe((convs) => {
      this.conversionList = convs;
      this.ratesTimestamp = 'April 24, 2019, 9:56:58 PM CDT';
    });
  }

}
