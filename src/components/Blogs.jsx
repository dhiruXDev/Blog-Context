import React, { useContext } from "react";
import { AppContext } from "../contextAPI/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

export default function Blogs(){
   const{loading , Posts}=useContext(AppContext);
   console.log("inside blog..." , Posts);
    return(       
         <div className=" flex flex-col  m-auto items-center max-w-[720px] pt-12  pb-8">
             {
                loading ? ( <Spinner /> )  : 
                ( Posts.length === 0  ?  ( <div className=" w-[100vw] h-[100vh]  flex justify-center items-center  "> <h1 className=" text-2xl font-bold">No post found</h1> </div>)  
                    :
                 ( Posts.map((post)=>(
                        
                         <BlogDetails key={post.id} post={post} />
                    ))
                ))
             }
         </div>
    );
}