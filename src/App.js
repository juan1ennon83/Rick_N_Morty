import './App.css';
import Cards from './components/Cards/';
import NavBar from './components/NavBar';
import axios from 'axios';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';


function App() {

   const [characters, setCharacters] = useState ([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
        if (data.name) {
          const isDuplicate = characters.some((char) => char.id === data.id);
          if (isDuplicate) {
            window.alert('¡Repeated Character!');
          } else {
            setCharacters((prevChars) => [...prevChars, data]);
          }
        } else {
          window.alert('No character found with this ID!');
        }
      });
    }

   const onClose = (id) => {
      setCharacters(
         characters.filter((char) =>{
            return char.id !== Number(id)
         })
      )
   }

   function generarRandomId () {
      const randomId = Math.floor(Math.random() * 826) + 1;
      onSearch(randomId)
   } 

   return (
      <div className='App'>
         <NavBar onSearch={onSearch} randomCharacter={generarRandomId} />
         <Routes>
            <Route path='/About' element={<About/>} />
            <Route path='/Home' element={ < Cards characters={characters} onClose={onClose} /> }/>
            <Route path='/Detail/:id' element={<Detail/>} />
         </Routes>
      </div>
   );
}

export default App;