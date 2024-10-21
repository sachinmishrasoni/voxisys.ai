import { combineReducers } from 'redux';

import commonReducer from './slices/common/commonSlice'

const rootReducer = combineReducers({
    common: commonReducer,
});

export default rootReducer;
