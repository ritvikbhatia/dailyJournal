import React from 'react';
import Body from '../components/body';
import Header from '../components/header';
import Footer from '../components/footer';
import Axios  from 'axios';

function DeletePost(){
    const [blogs, setBlogs] = React.useState([]);

    function getBlogs(){
         Axios.get("https://dailyjournalnodejs.herokuapp.com/getBlog")
         .then((response)=>{
               response.data.map((e)=>{
                   return setBlogs((prevValue)=>{
                    return [...prevValue,e];
               });
               });
          

         });
    }

    React.useEffect(()=>{
           return getBlogs();
    },[]);
   
    return <>
     <Header />
    <Body heading="Delete Posts " Content={blogs} pageType="deletePost"/>
     <Footer/>
    </>
}

export default DeletePost;