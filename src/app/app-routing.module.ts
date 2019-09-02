import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { MyObservablesComponent } from './my-observables/my-observables.component';

const routes: Routes = [
    { path: 'book-list', component: BookListComponent },
    { path: 'my-observables', component: MyObservablesComponent },
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
