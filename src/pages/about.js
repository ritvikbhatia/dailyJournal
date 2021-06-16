import React from 'react';
import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';

let blogs =[];
const blog = {
    title:"Hi! I'm Aman Your friendly neighbourhood coder.",
    content: "This is my blog that keeps track of my Coding Knowledge.",
    date:"13/6/2021"
}
blogs.push(blog);

function About(){
    return <>
    <Header />
   <Body heading="About Author" Content={blogs} pageType="about" />
    <Footer/>
   </> ;

}


export default About;