import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import '../src/constants/css/constant.css'
import Home from './Pages/Home/Home';
import './App.css';
import PrivacyPolicy from './Pages/Privacy Policy/PrivacyPolicy';
import AboutUs from './Pages/About Us/AboutUs';
import Gallary from './Pages/Gallary/Gallary';
import Packages from './Pages/Packages/Packages';
import Blogs from './Pages/Blogs/Blogs';
import Blog from './Pages/Blog/Blog';
import ContactUs from './Pages/ContactUs/ContactUs';
import PackageDetails from './Pages/Packages/PackageDetails';

const router = createBrowserRouter([
  {
    path: "/", element: <Header />, children: [
      { path: '/', element: <Home /> },
      { path: '/privacy-policy', element: <PrivacyPolicy /> },
      { path: '/about-us', element: <AboutUs /> },
      { path: '/gallery', element: <Gallary /> },
      { path: "/packages", element: <Packages /> },
      { path: '/package-details', element: <PackageDetails /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <ContactUs /> },
    ]
  }
])

function App() { return <RouterProvider router={router} primary={false} /> }

export default App;
