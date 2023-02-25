import logo from './logo.svg';
import './App.css';
import { Home } from './components/home';
import { RecipeContextProvider } from './components/context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Details } from './components/details';
import { CreateRecipe } from './components/createRecipe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <RecipeContextProvider>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/details' element={<Details />}/>
          <Route path='/createPost' element={<CreateRecipe />}/>
        </Routes>
        
      </RecipeContextProvider>
      </BrowserRouter>


    </div>
  );
}

export default App;
