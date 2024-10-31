import React, { Children, createContext, useState } from "react";
import { baseUrl } from '../baseUrl';
import {  useNavigate } from "react-router-dom";

// Step 1 --->     Creation of Context
export  const AppContext = createContext();
export default function AppContextProvider({children} ) {
    // we have to menstion these variable that i want to context
    const [loading, setLoading] = useState(false);
    const [Posts, setPosts] = useState([]);
    const [Page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    async function fetchBlogsPost(Page =1 , tag = null , category ) {
            let url = `${baseUrl}?page=${Page}`;
        if (tag) {
            url += `&tag=${tag}`; 
       }
       if (category) {
            url += `&category=${category}`;
       }
        setLoading(true);
        // let Url = `${baseUrl}?page=${Page}`;
        try {
            const respose = await fetch(url);
            const data =  await respose.json();
            console.log('Fetched data:', data); // Add this line             
            setPosts(data.posts);
            setPage(data.page);
            setTotalPages(data.totalPages);
        }
        catch (error) {
            console.log("error found");
            setTotalPages(null);
            setPage(1);
            setPosts([]);
        }
        setLoading(false);
    }
    // Handle is for when i clicked on next or prev , it will fetch the page no. and then it will call fetchBlogsdata()   
    function ClickedPageHndler(pagex) {
        navigate( {search: `?page=${pagex}`}); 
        // fetchBlogsPost(pagex);
        setPage(pagex);
    }
    // Now i,can say  i have created context i,e. Allvalue . ------Centerilized data create kr liye------
    const allVlues = {
        Posts,
        setPosts,
        loading,
        setLoading,
        Page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogsPost,
        ClickedPageHndler
    };
    
 
    // Step 2. --->  provider ko provide karana
    return <AppContext.Provider value={allVlues}>
        {children}
    </AppContext.Provider>
    // step 3. ---> consuming these context (data)  --> consuming means Vo  hame jaha-jaha data chahiye use kr lenge.
}
