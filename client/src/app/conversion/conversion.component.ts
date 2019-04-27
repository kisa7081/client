import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ConversionService} from '../conversion.service';

@Component({
    selector: 'app-conversion',
    templateUrl: './conversion.component.html',
    providers: [ConversionService]
})
export class ConversionComponent implements OnInit {

    conversionList = null;
    ratesTimestamp = null;
    @Output() refreshTimestampEvent = new EventEmitter();

    constructor(private conversionService: ConversionService) {
    }

    ngOnInit() {
        this.handleListRefresh();
    }

    handleListRefresh() {
        this.conversionService.listConversions().subscribe((convs) => {
            this.conversionList = convs;
            this.conversionService.getTimestamp().subscribe((ts) => {
                this.ratesTimestamp = ts;
            });
        });
    }

    deleteAll() {
        this.conversionService.deleteAll().subscribe(() => {
            this.handleListRefresh();
        });
    }
}
