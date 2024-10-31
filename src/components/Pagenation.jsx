import React, { useContext } from "react";
import { AppContext } from "../contextAPI/AppContext";
export default function Pagenation(){
    const{Page , totalPages , ClickedPageHndler} = useContext(AppContext);
 
    return(
         <div className="flex fixed  bottom-0 bg-white    justify-around w-full  px-[4rem]  pb-5   border-t-2  shadow-slate-800    ">
            <div className="flex gap-2 ml-8 mt-2 ">
                {
                   Page > 1 &&
                   (<button onClick={()=> ClickedPageHndler(Page-1)} className=" border-2 bg-slate-100 rounded-lg py-1 px-3  text-sm  font-semibold  " >Previous</button>) 
                }
                {
                    Page < totalPages &&
                    (<button onClick={()=> ClickedPageHndler(Page+1)}  className=" border-2 bg-slate-100 rounded-lg py-1 px-3  text-sm  font-semibold   ">Next</button> )
                }              
            </div>
            <div> 
                 <p className=" font-bold  pt-2 ">Page {Page} of {totalPages}</p>
            </div>
         </div>
    )
}