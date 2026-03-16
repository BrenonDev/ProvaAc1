import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { CalcularMedia } from './calcular-media/calcular-media';
import { ApoliceSeguro } from './apolice-seguro/apolice-seguro';
import { ConversorTemperatura } from './conversor-temperatura/conversor-temperatura';
import { CalcularImc } from './calcular-imc/calcular-imc';
import { NotFound } from './not-found/not-found';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'calcular-media', component: CalcularMedia},
  {path: 'apolice-seguro', component: ApoliceSeguro},
  {path: 'conversor-temperatura', component: ConversorTemperatura},
  {path: 'calcular-imc', component: CalcularImc},
  {path: '**', component: NotFound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
