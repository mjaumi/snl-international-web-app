import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';

function App() {
  return (
    <main data-theme='snl-theme' className='font-poppins'>
      <RouterProvider router={routes} />
    </main>
  );
}

export default App;
