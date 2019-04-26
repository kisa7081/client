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
        this.handleRefresh();
    }

    handleRefresh() {
        this.conversionService.listConversions().subscribe((convs) => {
            this.conversionList = convs;
            this.conversionService.getTimestamp().subscribe((ts) => {
                this.ratesTimestamp = ts;
            });
        });
    }

    deleteAll() {
        this.conversionService.deleteAll().subscribe(() => {
            this.handleRefresh();
        });
    }

    refreshRates() {
        this.conversionService.refreshRates().subscribe(() => {
            this.handleRefresh();
        });
    }

}
