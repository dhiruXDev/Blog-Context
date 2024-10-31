import React from "react";

import Blogs from "./Blogs";
import Pagenation from "./Pagenation";
import Header from "./Header";
 export default function Home(){
    return(
        <div>
            <Header />
            <div className=" z-10 pt-8 ">
                <Blogs />
                <Pagenation />
            </div>
        </div>
    )
 }