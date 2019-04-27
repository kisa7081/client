import {Component, OnInit} from '@angular/core';
import {ConversionService} from '../conversion.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-conversion',
    templateUrl: './create-conversion.component.html',
    providers: [ConversionService]
})
export class CreateConversionComponent implements OnInit {

    constructor(private conversionService: ConversionService, private router: Router) {
    }

    currencies = null;
    conversion: any = {};

    ngOnInit() {
        this.conversionService.getCurrencies().subscribe((cur) => {
            this.currencies = this.createArrayFromObject(cur);
        });
    }

    createConversion(cur: any): void {
        this.conversionService.createConversion(cur.value).subscribe(() => {
            this.router.navigate(['/conv']);
        });
    }

    private createArrayFromObject(currObj) {
        const keys = Object.keys(currObj);
        const arr = [];
        console.log(currObj);
        for (const curr of keys) {
            const a = {value : curr, viewValue : currObj[curr]};
            console.log(curr);
            arr.push(a);
        }
        return arr;
    }
}
