import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../components/Home'
import Contact from '../components/Contact'
import About from '../components/About'
import Layout from '../src/Layout'
import Youtube from '../components/Youtube'
import Projects from '../components/Projects'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {path: "", element: <Home /> },
            {path: "contact", element: <Contact />},
            {path: "about", element: <About />},
            {path: "youtube", element: <Youtube />},
            {path: "projects", element: <Projects />},
        ]
    }    
])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
