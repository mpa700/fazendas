import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Produtor } from '../models/produtor.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lista-produtores',
  templateUrl: './lista-produtores.component.html',
  styleUrls: ['./lista-produtores.component.css']
})

export class ProdutoresListComponent implements OnInit {
  produtoresmock = [
    {
      id: 1,
      cpfCnpj: '123.456.789-00',
      nome: 'João da Silva',
      nomeFazenda: 'Fazenda Feliz',
      cidade: 'São Paulo',
      estado: 'SP',
      areaTotal: 1000,
      areaAgricultavel: 800,
      areaVegetacao: 200,
      culturas: ['Soja', 'Milho'],
    }
    
    
  ];
  produtores: Produtor[] = [];

  constructor(private router: Router, private http: HttpClient ) {}

  ngOnInit(): void {
   this.obterProdutores(); 
    
  }
  obterProdutores(): void {
    this.http.get('http://localhost:3000/api/produtores').pipe(
      map((data: Object) => {
        return Object.values(data).map((produtor: Produtor) => {
          return {
            id: produtor.id,
            cpf_cnpj: produtor.cpf_cnpj,
            nome: produtor.nome,
            nome_fazenda: produtor.nome_fazenda,
            cidade: produtor.cidade,
            estado: produtor.estado,
            area_total: produtor.area_total,
            area_agricultavel: produtor.area_agricultavel,
            area_vegetacao: produtor.area_vegetacao,
            culturas: produtor.culturas,
          };
        });
      })
    ).subscribe((produtores: Produtor[]) => {
      this.produtores = produtores;
      console.log(this.produtores);
    });
  }
  cadastro(): void {
    this.router.navigate(['/cadastro-produtor']);
  }
  grafico(): void {
    this.router.navigate(['/dashboard']);
  }
}
