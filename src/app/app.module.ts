
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { appReducer } from './app.reducer';
import { CadastroProdutorComponent } from './cadastro-produtor/cadastro-produtor.component';
import { ProdutoresListComponent } from './lista-produtores/lista-produtores.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProdutoresListComponent,
    CadastroProdutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgChartsModule,
    StoreModule.forRoot({ app: appReducer }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

