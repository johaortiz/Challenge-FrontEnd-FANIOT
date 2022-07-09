//import logo from './logo.svg';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Pages/LandingPage';
import NavBar from './components/Nav/NavBar';
import Home from './components/Pages/Home';
import Details from './components/Pages/Details';
import Provider from './Providers/';
import Error404 from './components/Pages/Error404';
import CreatePokemon from './components/Pages/CreatePokemon';


function App() {
  return (
    <div className="App">
      <Provider>
          <BrowserRouter>
            <header>
              <NavBar />
            </header>
            <main>
              <Routes>
                <Route exact path='/' element={<LandingPage />} />
                <Route exact path='/home' element={<Home />} />
                <Route exact path='/pokemon/:id' element={<Details />} />
                <Route exact path='/NotFound' element={<Error404 />} />
                <Route exact path='/create' element={<CreatePokemon />} />
                <Route path="*"  element={ <> <Navigate to="/NotFound" /> </> } />
              </Routes>
            </main>
          </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
