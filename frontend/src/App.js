import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './higher-order-components/Layout'
import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetails from './components/BlogDetails';
import Category from './components/Category';


const App = () => (
  <Router>
    <Layout>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/category/:id' element={<Category />} />
        <Route exact path='/blog/:id' element={<BlogDetails />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;

