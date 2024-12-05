import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import './App.css';
import Gallery from "./pages/Gallery";
import Registry from "./pages/Registry";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

const App = () => {
  return (
      <Router>
          <Layout>
           <Routes>
                  <Route path='/' element={<HomePage />}></Route>
                  <Route path='/Gallery' element={<Gallery />}></Route>
                  <Route path='/Registry' element={<Registry />}></Route>
                  <Route path='/AboutUs' element={<AboutUs />}></Route>
                  <Route path='/Contact' element={<Contact />}></Route>
           </Routes>
      </Layout>
      </Router>
  )

};
export default App;