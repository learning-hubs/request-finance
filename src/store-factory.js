import {combineReducers} from 'redux';

import * as requestUseEquipmentReducer from './request-finance/request-used-equip-finance/reducers';
import * as storeConfigurator from './shared/services/store-configurator';

let store;

function createStore() {
    const reducer = combineReducers({
        ...requestUseEquipmentReducer
    });

    return storeConfigurator.create(reducer);
}

export function getStore() {
    if(!store) {
        store = createStore();
    }
    return store;
}

export function destroyStore() {
    store = null;
}