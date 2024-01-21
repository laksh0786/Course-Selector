import React from "react";
import {FcLike , FcLikePlaceholder} from "react-icons/fc";   
import { useState } from "react";

import { toast } from "react-toastify";


function Card(props){
    
    
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;


    
    let description;
    const [showmore , setShowmore] = useState(false);

    function descriptionHandler(){
        setShowmore(!showmore);
    }

    showmore ? description = course.description : description = course.description.substring(0,100)+"...";



    function clickHandler(){
        // toast.success("Added to Wishlist");
        if(likedCourses.includes(course.id)){
            //Already liked
            //remove from liked courses
            
            setLikedCourses( (prevLikedCourses) => { 
                return prevLikedCourses.filter(cid=>{
                    return cid!==course.id;
                })
            })
            
            toast.warning("Removed from Liked list");

        }

        else{
            //Not liked
            //Add to liked courses
            if(likedCourses.length===0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev)=>[...prev , course.id]);
            }
            toast.success("Added to Liked list");
        }
    }

    return(
        <div className="w-[300px] bg-opacity-70 bg-bgDark rounded-md overflow-hidden">
            
            <div className="relative">
                
                <img src={course.image.url} alt={course.image.alt}/>

            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-[5px] -bottom-[17px] grid place-items-center">
                <button onClick={clickHandler}>
                    
                    {     /* we cant use if else in the jsx part we have to use only if else*/
                        (likedCourses.includes(course.id)) ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />
                    }

                </button>
            </div>                

            </div>


            <div className=" mt-1 p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                    {description} 
                    <span className="text-rose-300 cursor-pointer" onClick={descriptionHandler}>
                        {showmore ? " Show Less" : " Show More"}
                    </span>
                </p>
            </div>

        </div>
    );
}

export default Card;