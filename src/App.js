import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { filterData , apiUrl } from "./data";

import { toast } from "react-toastify";

const App = () => {

  // console.log(filterData);

  //We dont initialise 'courses' with NULL because when intialliy it is rendered first then the iterating over NULL will give error
  
  const [courses , setCourses] = useState([]);
  const [loading , setLoading] = useState(true);
  const [category , setCategory] = useState(filterData[0].title);

  async function fetchData(){
   
    setLoading(true);
    
    try{
      let data = await fetch(apiUrl);
      let res = await data.json();
      setCourses(res);
    }
    catch(err){
      console.log(err);
      toast.error("Something went wrong");
    }

    setLoading(false);
    
  }


  useEffect( ()=>{
     fetchData();
  } , [])
  

  return (
    <div className=" min-h-screen flex flex-col">
      
        <div>
          <Navbar/>
        </div>

        <div className="bg-bgDark2 min-h-screen">
            
            <div>
              <Filter filterData ={filterData} category={category} setCategory={setCategory}/>
            </div>

            <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
              {
                loading ? <Spinner/> : <Cards courses={courses} category={category}/>
              }
            </div>

        </div>

    </div>
  );
};

export default App;
