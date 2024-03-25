import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux";

import './index.css';
import {router} from "./router";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

