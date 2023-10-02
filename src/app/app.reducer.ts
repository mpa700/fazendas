import { Action } from '@ngrx/store';
import { AppState } from './app.state';

const initialState: AppState = {
    produtores: [],
    dashboardData: {
      totalFarms: 0,
      totalHectares: 0,
      statePieChart: [],
      culturePieChart: [],
      landUsePieChart: []
    }
};
   

  export function appReducer(state = initialState, action: Action): AppState {
    switch (action.type) {
      
      default:
        return state;
    }
  }