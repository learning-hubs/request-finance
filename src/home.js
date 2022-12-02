import {Link} from 'react-router-dom';
import * as routeMaps from './route-maps';

const routes = Object.values(routeMaps)
            .map(route => ({
                label: route.props['data-label'],
                path: route.props.path
            }));

function Home() {
    return (
        <div>
            <h2>Request Finance</h2>
            <ul>
                {
                    routes.map(route =>
                       <li key={route.path}>
                            <Link to={route.path}>{route.label}</Link>
                       </li> 
                    )
                }
            </ul>
        </div>
    );
}

Home.displayName = 'Home';

export default Home;