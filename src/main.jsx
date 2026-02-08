import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './Router/Router.jsx'
import { RouterProvider } from 'react-router'
import Authprovider from './context/Authcontext/Authprovider.jsx'

createRoot(document.getElementById('root')).render(
    <Authprovider>
        <RouterProvider router={router} />
    </Authprovider>)
