import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurant from './components/Restaurant';
import Restoview from './components/Restoview';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
      <Route path='/' element={<Restaurant></Restaurant>}/>
      <Route path='/view-restaurant/:id' element={<Restoview/>}></Route>
      </Routes>

      
      <Footer></Footer>

    </div>
  );
}

export default App;
