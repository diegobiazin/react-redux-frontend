import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'

import DashboardReducer from "../dashboard/dashboardReducer";
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
  //dashboard: () => ({ summary: { credit: 100, debt: 50 } })
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  form: formReducer
});

export default rootReducer;
