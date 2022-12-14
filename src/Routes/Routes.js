import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main';
import AboutUs from '../pages/AboutUs/AboutUs';
import ContactUs from '../pages/ContactUs/ContactUs';
import Home from '../pages/Home/Home';
import SisterConcerns from '../pages/SisterConcerns/SisterConcerns';


// all the routes are created here
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: '/sister-concerns',
                element: <SisterConcerns />
            },
            {
                path: '/contact-us',
                element: <ContactUs />
            }
        ]
    }
]);