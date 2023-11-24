import './App.css';
import Header from './components/Header.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import IndividualArticleContainer from './components/IndividualArticleContainer.jsx'
function App() {
  return (
    <BrowserRouter>
       <Header/>
       <main className="mainContent">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/articles/:article_id"
              element={<IndividualArticleContainer />}
            ></Route>
           
          </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
