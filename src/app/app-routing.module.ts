import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroProdutorComponent } from './cadastro-produtor/cadastro-produtor.component';
import { ProdutoresListComponent } from './lista-produtores/lista-produtores.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, 
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/cadastro-produtor', pathMatch: 'full' }, 
  { path: 'cadastro-produtor', component: CadastroProdutorComponent },
  { path: '', redirectTo: '/lista-produtores', pathMatch: 'full' }, 
  { path: 'lista-produtores', component: ProdutoresListComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
