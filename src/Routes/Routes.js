import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main';
import Home from '../pages/Home/Home';


// all the routes are created here
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
]);