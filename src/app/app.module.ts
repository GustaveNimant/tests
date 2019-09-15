import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { MyObservablesComponent } from './my-observables/my-observables.component';
import { HeaderComponent } from './header/header.component';
import { MyFunctionsComponent } from './my-functions/my-functions.component';

import { IrpProviderComponent } from './irp-provider/irp-provider.component';
import { IrpService } from './services/irp.service';

@NgModule({
    declarations: [
	AppComponent,
	BookListComponent,
	MyObservablesComponent,
	HeaderComponent,
	MyFunctionsComponent,
	IrpProviderComponent
    ],
    imports: [
	BrowserModule,
	AppRoutingModule,
    ],
    providers: [
	IrpService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
