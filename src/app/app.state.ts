import { Produtor } from './models/produtor.model.js';

export interface AppState {
    produtores: Produtor[];
    dashboardData: DashboardData;

}

export interface DashboardData {
    totalFarms: number;
    totalHectares: number;
    statePieChart: ChartData[];
    culturePieChart: ChartData[];
    landUsePieChart: ChartData[];
  }

  export interface ChartData {
    label: string;
    value: number;
  }

  export interface ProducerData {
  }

export { Produtor };
