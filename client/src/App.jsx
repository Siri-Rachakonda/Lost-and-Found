import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import LostItemsPage from "./pages/LostItemsPage";
import FoundItemPage from "./pages/FoundItemPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
      <Route>
         <Route path="/" element={<Home />}/>
         <Route path='/signup' element={<Signup />}/>
         <Route path='/login' element={<Login />}/>
         <Route path='/lost-items' element={<LostItemsPage />}/>
         <Route path='/found-items' element={<FoundItemPage />}/>
      </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App