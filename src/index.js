import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Music from "./Music/music.tsx";
import "./Estilos/generalStyles.css"
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/Music",
    element: <Music />,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// const root =  ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    </React.StrictMode>  
);


  //   // <React.StrictMode>
  //     <App />
  //   // </React.StrictMode>
  // );
  
// import reportWebVitals from './reportWebVitals';
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
