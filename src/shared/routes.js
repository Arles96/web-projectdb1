import Home from './Home/Home';
import Login from './Login/Login';

const routes = [
    {
        path : '/Home',
        component: Home,
        exact : true
    },
    {
        path : '/',
        component : Login,
        exact : true
    }
]

export default routes;