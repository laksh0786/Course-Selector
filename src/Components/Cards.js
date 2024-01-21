import React, { useState } from "react";
import Card from "./Card";

function Cards(props){

    let courses = props.courses;
    let category = props.category;
    console.log(courses);

    const [likedCourses , setLikedCourses] = useState([]); 

    let selCourses = [];


    //Object.values(object_name) will return an array of values of the object without the keys
    //In the below code firstly we get the array of all values without the keys
    //Then we iterate over each value and again iterate over each element of the value array and push it into the allCourse array
    
    if(category==="All"){
        Object.values(courses.data).forEach((course)=>{
            course.forEach(element=>{
                selCourses.push(element)
            })
        })
    }
    else{
        //Only specific category course will be selected
        selCourses = courses.data[category];
    }
    
    

    console.log(selCourses);
    

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                selCourses.map((item)=>{
                   return <Card key={item.id} course={item} likedCourses = {likedCourses} setLikedCourses={setLikedCourses} ></Card> //in arrow function Component optional to use return but in normal function it is mandatory
                })
            }
        </div>
    )
}

export default Cards;