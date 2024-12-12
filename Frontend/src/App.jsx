import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from './pages/Home/Index';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route>
      <Route path="/home" element={"this is home route"} />
      <Route path="/" element={<Homepage/>} />
    </Route>
       
    
    )
  );
  return (
    <>
     <RouterProvider
    router={router}/>
    </>
  )
}

export default App