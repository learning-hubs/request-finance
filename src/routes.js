import { Route, Switch } from 'react-router-dom';
import * as routeMaps from './route-maps';
import RequestFinanceProvider from './request-finance-provider';

export const Routes = () => (
    <Route path='/account-request-finance'>
        {
            ({location, match}) => match &&
            <RequestFinanceProvider>
                <Switch location={location}>
                    {routeMaps.requestUsedEquipmentFinance}
                </Switch>
            </RequestFinanceProvider>
        }
    </Route>
);