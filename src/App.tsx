import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './pages/Homepage';
import GetInTouch from './views/GetInTouch';
import Login from './views/Login';
import SignUp from './views/SignUp';
import ErrorPage from './pages/ErrorPage';
import HandleUrl from './components/HandleUrl';
import History from './components/History';
//import {initializeApp} from 'firebase/app' 

const router = createBrowserRouter([
  { path: "*", element: <ErrorPage /> },
  { path: "/", element: <Homepage/> },
  { path: "/login", element: <Login/> },
  { path: "/sign-up", element: <SignUp/> },
  { path: "/:shortened_url", element: <HandleUrl/> },
  { path: "/url-history", element: <History/> },
  { path: "/get-in-touch", element: <GetInTouch/> },

])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
