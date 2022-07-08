//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import NavBar from './components/NavBar';
import Search from './components/Provider/search';

function App() {
  return (
    <div className="App">
      <Search>
          <BrowserRouter>
            <header>
              <NavBar />
            </header>
            <main>
              <Routes>
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/pokemon/:id' element={<Details />} />
              </Routes>
            </main>
          </BrowserRouter>
      </Search>
    </div>
  );
}

export default App;
