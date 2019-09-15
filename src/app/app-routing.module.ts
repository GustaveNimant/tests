import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { MyObservablesComponent } from './my-observables/my-observables.component';
import { MyFunctionsComponent } from './my-functions/my-functions.component';
import { IrpProviderComponent } from './irp-provider/irp-provider.component';

const routes: Routes = [
    { path: 'book-list', component: BookListComponent },
    { path: 'my-functions', component: MyFunctionsComponent },
    { path: 'my-observables', component: MyObservablesComponent },
    { path: 'irp-provider', component: IrpProviderComponent },
    { path: '', pathMatch: 'full', component: BookListComponent},
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
	RouterModule.forRoot(routes)
    ],
    exports: [
	RouterModule
    ],
    providers: [
    ]
})
export class AppRoutingModule {}
