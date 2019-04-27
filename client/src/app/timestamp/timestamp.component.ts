import {Component, OnInit} from '@angular/core';
import {ConversionService} from '../conversion.service';

@Component({
    selector: 'app-timestamp',
    templateUrl: './timestamp.component.html'
})
export class TimestampComponent implements OnInit {

    ratesTimestamp = null;

    constructor(private conversionService: ConversionService) {
    }

    ngOnInit() {
        this.refreshTimestamp();
    }

    refreshTimestamp(): void {
        this.conversionService.refreshRates().subscribe(() => {
            this.conversionService.getTimestamp().subscribe((ts) => {
                this.ratesTimestamp = ts;
            });
        });
    }
}
