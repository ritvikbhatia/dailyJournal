import React from 'react';
import Body from '../components/body';
import Header from '../components/header';
import Footer from '../components/footer';
import Axios from 'axios';



function Home(){
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
    <Body heading="All Posted Blogs " Content={blogs} pageType="home" />
     <Footer/>
    </>
}

export default Home;