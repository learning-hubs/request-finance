import React from "react";
import {Route} from "react-router-dom";

const RequestUsedEquipmentFinance = React.lazy(() => import('./request-finance/request-used-equip-finance'));

export const requestUsedEquipmentFinance = (
    <Route
        component={RequestUsedEquipmentFinance}
        data-label='Request Used Equipment Finance'
        exact={true}
        path='/account-request-finance/used-equipment'
    />
);