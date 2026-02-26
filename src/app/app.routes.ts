import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { TimeslistComponent } from './components/times/timeslist/timeslist.component';
import { TimesdetailsComponent } from './components/times/timesdetails/timesdetails.component';
import { JogadoreslistComponent } from './components/jogadores/jogadoreslist/jogadoreslist.component';
import { JogadoresdetailsComponent } from './components/jogadores/jogadoresdetails/jogadoresdetails.component';
import { Escalacao433Component } from './formacoes/escalacao433/escalacao433.component';

export const routes: Routes = [
    {path: "", component: PrincipalComponent, children: [
        {path: "times", component: TimeslistComponent}, 
        {path: "times/new", component: TimesdetailsComponent},
        {path: "times/edit/:id", component: TimesdetailsComponent},
        {path: "jogadores", component: JogadoreslistComponent}, 
        {path: "jogadores/new", component: JogadoresdetailsComponent},
        {path: "jogadores/edit/:id", component: JogadoresdetailsComponent},
        {path: "escalacao433", component: Escalacao433Component}
    ]}
];
