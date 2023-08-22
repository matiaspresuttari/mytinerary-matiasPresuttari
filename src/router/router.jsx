import {createBrowserRouter} from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Cities from '../pages/Cities.jsx'
import CityDetails from '../pages/CityDetails.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/cities',
        element: <Cities/>
    },
    {
        path: '/cities/:id',
        element: <CityDetails/>
    }
]);

export default router;