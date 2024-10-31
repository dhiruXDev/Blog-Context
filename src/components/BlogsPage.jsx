import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Blogs from "./Blogs";
import Pagenation from "./Pagenation";
import { useState } from "react";
import { AppContext } from "../contextAPI/AppContext";
import { baseUrl } from "../baseUrl";
import BlogDetails from "./BlogDetails";
import Spinner from "./Spinner";

export default function BlogsPage(){
    const navigation =useNavigate();    // it is for going piche vala page 
    const location = useLocation();
    const [blog , setBlog ] = useState(null);
    const [relatedBlogs , setRelatedBlog] = useState([]);
     
    // https://codehelp-apis.vercel.app/api/get-blogs
    const {loading , setLoading ,Posts} = useContext(AppContext);
    const[post , setPost] = useState(null);
    const blogId = location.pathname.split("/").at(-1);
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    async function fetchRelatedBlogsData (){
         setLoading(true);
        //  let url = `${baseUrl}?blogId=${blogId}`;
         let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
         try {
                let res= await fetch(url);
                let data = await res.json();
                setBlog(data.blog);
                setRelatedBlog(data.relatedBlogs);
                setPost(data.blog);
         } catch (error) {
             <p> Error found</p>
             console.log(error);
             setBlog(null);
             setRelatedBlog([]);
         }
         setLoading(false);
    }
    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogsData();
        }
    },[location.pathname]);
    return(
            <div className=" ">
                    <Header />
                    <div className="  max-w-[720px] mx-auto  pt-[4rem] ">
                    <button onClick={()=> navigation(-1)}  
                              className="border-2  bg-slate-50 rounded-lg py-1 px-8  text-sm  font-semibold my-3 " > Back </button>
                       
                        {
                            loading ? ( <Spinner />) : 
                            ( blog ? 
                                (  <div> 
                                    <BlogDetails post={blog} key={Posts.id} />   
                                    <h1 className=" text-2xl font-semibold  py-3">Related Blogs</h1>
                                    {
                                        relatedBlogs.map((post)=>(
                                            <div>
                                                <BlogDetails post ={post} />
                                            </div>
                                        ))
                                    }
                                </div> ) 
                                : ( <div> No Related Blogs found </div> ) )
                        }  
                   
                    </div>
                 
                 
            </div>
    )
}