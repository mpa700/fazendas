import { createAction, props } from '@ngrx/store';
import { Producer, DashboardData } from './app.state';

// Exemplo de ação para adicionar um produtor rural
export const addProducer = createAction(
  '[Producer] Add Producer',
  props<{ producer: Producer }>()
);
export const addProducerSuccess = createAction(
  '[Producer] Add Producer Success',
  props<{ producer: Producer }>()
);
export const addProducerFailure = createAction(
  '[Producer] Add Producer Failure',
  props<{ error: any }>()
);  
export const loadProducers = createAction(
  '[Producer] Load Producers'
);
export const loadProducersSuccess = createAction(
  '[Producer] Load Producers Success',
  props<{ producers: Producer[] }>()
);  
export const loadProducersFailure = createAction(
  '[Producer] Load Producers Failure',
  props<{ error: any }>()
);
export const loadDashboardData = createAction(
  '[Dashboard] Load Dashboard Data'
);
export const loadDashboardDataSuccess = createAction(
  '[Dashboard] Load Dashboard Data Success',
  props<{ dashboardData: DashboardData }>()
);
export const loadDashboardDataFailure = createAction(
  '[Dashboard] Load Dashboard Data Failure',
  props<{ error: any }>()
);
export const loadProducer = createAction(
  '[Producer] Load Producer',
  props<{ id: number }>()
);
export const loadProducerSuccess = createAction(
  '[Producer] Load Producer Success',
  props<{ producer: Producer }>()
);
export const loadProducerFailure = createAction(
  '[Producer] Load Producer Failure',
  props<{ error: any }>()
);
export const updateProducer = createAction(
  '[Producer] Update Producer',
  props<{ producer: Producer }>()
);
export const updateProducerSuccess = createAction(
  '[Producer] Update Producer Success',
  props<{ producer: Producer }>()
);
export const updateProducerFailure = createAction(
  '[Producer] Update Producer Failure',
  props<{ error: any }>()
);
export const deleteProducer = createAction(
  '[Producer] Delete Producer',
  props<{ id: number }>()
);
export const deleteProducerSuccess = createAction(
  '[Producer] Delete Producer Success',
  props<{ id: number }>()
);
export const deleteProducerFailure = createAction(
  '[Producer] Delete Producer Failure',
  props<{ error: any }>()
);
export const clearProducer = createAction(
  '[Producer] Clear Producer'
);
export const clearProducerSuccess = createAction(
  '[Producer] Clear Producer Success'
);
export const clearProducerFailure = createAction(
  '[Producer] Clear Producer Failure',
  props<{ error: any }>()
);
export const clearProducers = createAction(
  '[Producer] Clear Producers'
);
export const clearProducersSuccess = createAction(
  '[Producer] Clear Producers Success'
);
export const clearProducersFailure = createAction(
  '[Producer] Clear Producers Failure',
  props<{ error: any }>()
);
export const clearDashboardData = createAction(
  '[Dashboard] Clear Dashboard Data'
);
export const clearDashboardDataSuccess = createAction(
  '[Dashboard] Clear Dashboard Data Success'
);
export const clearDashboardDataFailure = createAction(
  '[Dashboard] Clear Dashboard Data Failure',
  props<{ error: any }>()
);
export const clearState = createAction(
  '[Producer] Clear State'
);
export const clearStateSuccess = createAction(
  '[Producer] Clear State Success'
);
export const clearStateFailure = createAction(
  '[Producer] Clear State Failure',
  props<{ error: any }>()
);
export const clearError = createAction(
  '[Producer] Clear Error'
);
export const clearErrorSuccess = createAction(
  '[Producer] Clear Error Success'
);
export const clearErrorFailure = createAction(
  '[Producer] Clear Error Failure',
  props<{ error: any }>()
);
export const clearAll = createAction(
  '[Producer] Clear All'
);
export const clearAllSuccess = createAction(
  '[Producer] Clear All Success'
);
export const clearAllFailure = createAction(
  '[Producer] Clear All Failure',
  props<{ error: any }>()
);
export const clearAllSuccessAlert = createAction(
  '[Producer] Clear All Success Alert'
);
export const clearAllSuccessAlertSuccess = createAction(
  '[Producer] Clear All Success Alert Success'
);
export const clearAllSuccessAlertFailure = createAction(
  '[Producer] Clear All Success Alert Failure',
  props<{ error: any }>()
);
export const clearAllErrorAlert = createAction(
  '[Producer] Clear All Error Alert'
);
export const clearAllErrorAlertSuccess = createAction(
  '[Producer] Clear All Error Alert Success'
);
export const clearAllErrorAlertFailure = createAction(
  '[Producer] Clear All Error Alert Failure',
  props<{ error: any }>()
);
export const clearAllAlerts = createAction(
  '[Producer] Clear All Alerts'
);
export const clearAllAlertsSuccess = createAction(
  '[Producer] Clear All Alerts Success'
);
export const clearAllAlertsFailure = createAction(
  '[Producer] Clear All Alerts Failure',
  props<{ error: any }>()
);
export const clearAllAlertsSuccessAlert = createAction(
  '[Producer] Clear All Alerts Success Alert'
);
export const clearAllAlertsSuccessAlertSuccess = createAction(
  '[Producer] Clear All Alerts Success Alert Success'
);
export const clearAllAlertsSuccessAlertFailure = createAction(
  '[Producer] Clear All Alerts Success Alert Failure',
  props<{ error: any }>()
);
export const clearAllAlertsErrorAlert = createAction(
  '[Producer] Clear All Alerts Error Alert'
);