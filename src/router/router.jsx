import {createBrowserRouter} from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Cities from '../pages/Cities'
import CityDetails from '../pages/CityDetails'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import ProtectedRoute from './ProtectedRoute'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/cities',
                element: (<ProtectedRoute path='/'>
                    <Cities/>
                </ProtectedRoute>)
            },
            {
                path: '/cities/:id',
                element: <CityDetails/>
            },
        ]
    },
    {
        path: '/signin',
        element: (<ProtectedRoute path='/'>
            <SignIn/>
        </ProtectedRoute>)
    },
    {
        path: '/signup',
        element: <SignUp/>
    }
]);

export default router;