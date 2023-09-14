import {createBrowserRouter} from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Cities from '../pages/Cities'
import CityDetails from '../pages/CityDetails'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import UserNotExists from './UserNotExists'
import UserExists from './UserExists'

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
                element: (<UserNotExists path='/'>
                    <Cities/>
                </UserNotExists>)
            },
            {
                path: '/cities/:id',
                element: <CityDetails/>
            },
        ]
    },
    {
        path: '/signin',
        element: (<UserExists path='/'>
            <SignIn/>
        </UserExists>)
    },
    {
        path: '/signup',
        element: (<UserExists path='/'>
            <SignUp/>
        </UserExists>)
    }
]);

export default router;