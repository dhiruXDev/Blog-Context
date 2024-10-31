import React, { useContext, useEffect } from "react"
import Header from './components/Header.jsx';
import Blogs from './components/Blogs';
import Pagenation from './components/Pagenation.jsx'
import { AppContext } from "./contextAPI/AppContext.jsx";
import { Routes ,Route, useSearchParams, useLocation } from "react-router-dom";
import CatagoryPage from "./components/CatagoryPage.jsx";
import TagPage from  "./components/TagPage.jsx";
import BlogsPage from "./components/BlogsPage.jsx";
import Home from "./components/Home.jsx";


export default function App(){

    const{fetchBlogsPost } = useContext(AppContext);
    const [searchParamater , setSearchParameter] = useSearchParams();   // thsi is for finding search  field
    const  location = useLocation();   // Thsi is for finding where im standing 
 useEffect(()=>{
    const page = searchParamater.get("page") ?? 1;   // Meeans if page no. present then ok otherwise store  1
    if (location.pathname.includes("tags")) {
        // That means We have to go on Tag wala page  and Have to show theirs details
        const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");;
        //  if the page contain Tags then  insert  the Tag name into "tag", Bq i have to send in Appcontext for finding their details for showing
         fetchBlogsPost(Number(page) , tag);

    }
    else if(location.pathname.includes("categories"))
        {
             const categories = location.pathname.split("/").at(-1).replaceAll("-"," ");;
             fetchBlogsPost(Number(page) , null , categories);
        }
        else{
             fetchBlogsPost(Number(page));
        }
    
 },[location.pathname , location.search]);
     return (
         <Routes>
                <Route path="/" element={<Home />} />
                <Route path ="/blog/:blogId" element ={<BlogsPage/>} />
                <Route path = "/tags/:tag" element ={<TagPage />} />
                <Route path="/categories/:category" element ={<CatagoryPage />} />
         </Routes>
     )   
}