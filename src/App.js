import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bulma/css/bulma.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/:categoryId' element={<ItemListContainer/>} /> 
          {/* borre path=''category/:categoryId' porque me daba error */}
          <Route path='/item/:itemId' element={ <ItemDetailContainer/> }/>
          <Route path='*' element ={<h1>404 NOT FOUND</h1>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
