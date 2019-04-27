import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ConversionService} from '../conversion.service';

@Component({
    selector: 'app-conversion-list',
    templateUrl: './conversion-list.component.html',
    providers: [ConversionService]
})
export class ConversionListComponent implements OnInit {

    @Input() conversion;
    @Output() refreshListEvent = new EventEmitter();

    constructor(private conversionService: ConversionService) {
    }

    ngOnInit() {
    }

    updateConversion(obj: any): void {
        this.conversion.rate = obj.rate;
        this.conversionService.updateConversion(this.conversion).subscribe((result) => {
            this.conversion = result;
        });
    }

    deleteConversion(): void {
        this.conversionService.deleteConversion(this.conversion._id).subscribe(() => {
            this.refreshListEvent.emit();
        });
    }

}
