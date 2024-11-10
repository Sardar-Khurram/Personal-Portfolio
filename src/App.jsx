import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Home from './components/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Define routes using createBrowserRouter
const routes = createBrowserRouter([
  {
    path: '/',
    element: <> <Navbar /> <Home />  <Footer /></>
  },
  {
    path: '/about',
    element: <> <Navbar /> <About />  <Footer /></>
  },
  {
    path: '/contact',
    element: <> <Navbar /> <Contact />  <Footer /></>
  },
  {
    path: '/projects',
    element: <> <Navbar /> <Projects />  <Footer /></>
  },
  {
    path: '/skills',
    element: <> <Navbar /> <Skills />  <Footer /></>
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
