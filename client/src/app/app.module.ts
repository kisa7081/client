import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {ConversionComponent} from './conversion/conversion.component';
import {ConversionListComponent} from './conversion-list/conversion-list.component';
import {TimestampComponent} from './timestamp/timestamp.component';
import { CreateConversionComponent } from './create-conversion/create-conversion.component';

const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: ConversionComponent},
    {path: 'create', component: CreateConversionComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        ConversionComponent,
        ConversionListComponent,
        TimestampComponent,
        CreateConversionComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(
            routes
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
