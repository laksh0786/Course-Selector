import React from "react";

const Filter = ({filterData , category , setCategory})=>{

    function filterHandler(title){
        setCategory(title);
    }

    return(
        <div className="flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {   
                filterData.map((item)=>{
                    return(
                        <button 
                        className={`text-lg px-2 py-1 rounded-md font-medium text-white border bg-black hover:bg-opacity-50 transition-all duration-300 ${category===item.title ? "bg-opacity-60 border-white" : "bg-opacity-40 border-transparent"}`}
                         key={item.id} 
                        onClick={()=>{filterHandler(item.title)}}>{item.title}</button>
                    );
                })

            } 
            
        </div>
    );
}

export default Filter;