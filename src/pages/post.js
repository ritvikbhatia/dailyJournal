import React from 'react';
import Header from '../components/header';
import Body from '../components/body';
import Footer from '../components/footer';


function PostBlog(){
return <>
<Header/>
<Body heading="Post Your Blog" pageType="PostBlog"/>
<Footer />
</>
}

export default PostBlog;