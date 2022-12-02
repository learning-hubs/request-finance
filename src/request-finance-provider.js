import { Provider } from "react-redux";
import { getStore } from "./store-factory";
import PropTypes from 'prop-types';

const RequestFinanceProvider = props => 
    <Provider store={getStore()}>
        <RequestFinanceContainer>
            {props.children}
        </RequestFinanceContainer>
    </Provider>;

RequestFinanceProvider.displayName = 'RequestFinanceProvider';
RequestFinanceProvider.propTypes = { children: PropTypes.node.isRequired };

export default RequestFinanceProvider;