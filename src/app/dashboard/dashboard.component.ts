import { Component } from '@angular/core';
import * as Chart from 'chart.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public pieChartOptions: Chart.ChartOptions = {
    responsive: false, 
  };
  public pieChartLabels: string[] = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
  public pieChartType: Chart.ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55], label: 'Producao Agrícola' }
  ];
  public pieChartHeight = 300;
  public pieChartWidth = 300;
  public pieChartColors = [
    {
      backgroundColor: [
        'rgba(255, 0, 0, 0.3)',
        'rgba(0, 255, 0, 0.3)',
        'rgba(0, 0, 255, 0.3)',
        'rgba(255, 255, 0, 0.3)',
        'rgba(255, 0, 255, 0.3)',
        'rgba(0, 255, 255, 0.3)'
      ]
    }
  ];
  constructor(private router: Router) {}
  ngOnInit(): void {}
  
  voltar(): void {
    this.router.navigate(['/lista-produtores']);
  }
}

