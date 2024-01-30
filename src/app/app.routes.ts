import { Routes } from '@angular/router';
import { HomehomeComponent } from './home/home.component';


export const routes: Routes = [

    // added the home component by selecting the path as home
    {path: 'home', component: HomehomeComponent},
    // path will be blank and will be redirecting it to home
    // here, the 2nd path, indicates that if we type the local host address, it will redirect to home path. 
    // path match has been set to full which means it will check the full path specified in the address bar.
    {path: '', redirectTo: 'home', pathMatch: 'full'},
];
