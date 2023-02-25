import logo from './logo.svg';
import './App.css';
import { Home } from './components/home';
import { RecipeContextProvider } from './components/context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Details } from './components/details';
import { CreateRecipe } from './components/createRecipe';
import { LogIn } from './components/login';
import { Register } from './components/register';
import { HomeAuthentication } from './components/auth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RecipeContextProvider>
          <Routes>
            <Route path='/' element={<LogIn />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home' element={<HomeAuthentication />} />
            <Route path='/details' element={<Details />} />
            <Route path='/createPost' element={<CreateRecipe />} />
          </Routes>

        </RecipeContextProvider>
      </BrowserRouter>


    </div>
  );
}

export default App;
