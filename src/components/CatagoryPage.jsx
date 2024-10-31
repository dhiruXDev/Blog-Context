import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Blogs from "./Blogs";
import Pagenation from "./Pagenation";
export default function BlogsPage(){
    const navigation =useNavigate();    // it is for going piche vala page 
    const location = useLocation();
    const categories = location.pathname.split("/").at(-1);
    return(
            <div>
                <Header />
                <div>
                    <button onClick={()=>navigation(-1)} > Back </button>
                    <h2> Blogs on <span>#{categories}</span> </h2>
                </div>
                <Blogs />
                <Pagenation />
            </div>
    )
}