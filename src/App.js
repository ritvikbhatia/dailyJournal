import React from 'react';
import Home from './pages/home';
import About from './pages/about';
import DeletePost from './pages/deletePost';
import PostBlog from './pages/post';
import {Route} from 'react-router-dom';
function App(){
    return <>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/deletePost" component={DeletePost}/>
    <Route exact path="/post" component={PostBlog}/>
    </>;

}

export default App;