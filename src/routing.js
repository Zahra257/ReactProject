
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Home from './pages/Home';
import SiteLayout from './layouts/SiteLayout';
import {createBrowserRouter}from 'react-router-dom'
import AddArticle from './pages/articles/AddArticle';
import EditArticle from './pages/articles/EditeArticle';
import ListArticle from './pages/articles/ListArticle';
import ShowArticle from './pages/articles/ShowArticle';

export const routers = createBrowserRouter([
        {path : '/' ,element : <SiteLayout/>, children : [
        {path : '/about' ,element : <About/>},
        {path : '/home' ,element : <Home/>},
        {path : '/contact', element : <Contact/>},
        ]},  
        
        
        {path : '/blog' ,element : <SiteLayout/> , children:[
   
     {path : '/blog' ,element : <ListArticle/>},
      {path : '/blog/add' ,element : <AddArticle/>},
        {path : '/blog/edit/:id' ,element : <EditArticle/>},
        {path : '/blog/show' ,element : <ShowArticle/>}
        ]},

        
   
   
  ])