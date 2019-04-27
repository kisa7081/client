import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {ConversionComponent} from './conversion/conversion.component';
import {ConversionListComponent} from './conversion-list/conversion-list.component';
import {TimestampComponent} from './timestamp/timestamp.component';

const routes: Routes = [
    {path: '', redirectTo: '/conv', pathMatch: 'full'},
    {path: 'conv', component: ConversionComponent}
]

@NgModule({
    declarations: [
        AppComponent,
        ConversionComponent,
        ConversionListComponent,
        TimestampComponent
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
