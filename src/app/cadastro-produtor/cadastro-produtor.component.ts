import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupName, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Produtor } from '../models/produtor.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cadastro-produtor',
  templateUrl: './cadastro-produtor.component.html',
  styleUrls: ['./cadastro-produtor.component.css'],
})

export class CadastroProdutorComponent {
  produtorForm: FormGroup;
  produtores: Produtor[] = [];
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.produtorForm = this.fb.group({
      Id: [''],
      cpfCnpj: ['', Validators.required, this.validadocpfCnpj],
      nome: ['', Validators.required],
      nomeFazenda: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      areaAgricultavel: ['', Validators.required],
      areaVegetacao: ['', Validators.required],
      culturas: this.fb.array([''], this.validateCulturasNotEmpty)
    });
    
  }
  ngOnInit(): void {}
  validadocpfCnpj(cpfCnpj:any): boolean {
    if(cpfCnpj.length === 11){
      return this.validarCPF(cpfCnpj);
    }
    if(cpfCnpj.length === 14){
     return this.validarCNPJ(cpfCnpj);
    }
    return false;
  }
  salvarProdutorRural(): void {
    const produtor = this.produtorForm.value;
    console.log(produtor);
    this.http.post('http://localhost:3000/api/produtores', (produtor))
    .subscribe({
      next: response => {
        console.log('Produtor salvo com sucesso:', response);
      },
      error: error => {
        console.error('Erro ao salvar o produtor:', error);
      }
    });

   // this.produtorForm.reset();
    //this.router.navigate(['/lista-produtores']);
  }
  validarCPF(cpf:any):boolean {
    cpf = cpf.replace(/[^\d]+/g,'');
    if (cpf === '') return false;
    // Elimina CPFs invalidos conhecidos
    if (cpf.length !== 11 || 
        cpf === "00000000000" || 
        cpf === "11111111111" || 
        cpf === "22222222222" || 
        cpf === "33333333333" || 
        cpf === "44444444444" || 
        cpf === "55555555555" || 
        cpf === "66666666666" || 
        cpf === "77777777777" || 
        cpf === "88888888888" || 
        cpf === "99999999999")
            return false;
    // Valida 1o digito
    let add = 0;
    for (let i = 0; i < 9; i ++) 
        add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) 
        rev = 0;
    if (rev !== parseInt(cpf.charAt(9))) 
        return false;
    // Valida 2o digito
    add = 0;
    for (let i = 0; i < 10; i ++) 
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11) 
        rev = 0;
    if (rev !== parseInt(cpf.charAt(10)))
         return false;
    return true;
  }
  validateCulturasNotEmpty(control: AbstractControl): { [key: string]: boolean } | null {
    const culturas = control.value;
    if (!culturas || culturas.length === 0) {
      return { 'culturasEmpty': true };
    }
    return null;
  }
  validarCNPJ(cnpj:any):boolean {
    cnpj = cnpj.replace(/[^\d]+/g,'');
    if (cnpj === '') return false;
    if (cnpj.length !== 14)
        return false;
    // Valida DVs
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0,tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== digitos.charAt(1))
        return false;
    return true;
}

  grafico(): void {
    this.router.navigate(['/dashboard']);
  }

  lista(): void {
    this.router.navigate(['/lista-produtores']);
  }
}
  

  