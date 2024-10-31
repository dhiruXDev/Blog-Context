import React from "react";
import '../index.css';
export default function Spinner(){
    return (
        <div className=" flex flex-col  items-center justify-center gap-y-4 pt-[12rem] ">
             <div className="spinner"></div>
             <p className="font-bold">Loading...</p>
        </div>
    );
}