import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Blogs from "./Blogs";
import Pagenation from "./Pagenation";
export  default function TagPage(){
    const location = useLocation();
    const tags = location.pathname.split("/").at(-1);
    const navigation = useNavigate();
    return (
        <div>
             <Header/>
       
                 <div>
                    <button onClick={()=> navigation(-1)} >back</button>
                    <h2>Blog Tagged  <span>#{tags}</span> </h2>
                 </div>
             
             <Blogs />
             <Pagenation />

        </div>
    )
}