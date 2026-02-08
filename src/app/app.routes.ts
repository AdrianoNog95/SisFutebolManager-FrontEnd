import { Routes } from '@angular/router';
import { TimeslistComponent } from './components/times/timeslist/timeslist.component';
import { TimesdetailsComponent } from './components/times/timesdetails/timesdetails.component';

export const routes: Routes = [
    {path: "times", component: TimeslistComponent},
    {path: "times/new", component: TimesdetailsComponent},
    {path: "times/edit/:id", component: TimesdetailsComponent}

];
