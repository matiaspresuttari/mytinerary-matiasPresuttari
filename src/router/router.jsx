import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Cities from '../pages/Cities.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/cities',
        element: <Cities/>
    }
]);

export default router;