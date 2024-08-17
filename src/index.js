import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Addfavorite } from './Addfavorite';
import { useState } from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));
function Bapp(){
  const [value, setValue] = useState([

    {
      id: 1,
      name: "Amjad"


    },
    {
      id: 2,
      name: "venky"


    },
    {
      id: 3,
      name: "Shushant"


    },{
      id: 4,
      name: "Jinu"


    }

  ])
  const [favor,setFavor]= useState([
        
    
])
  return(<>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App value={value} setValue={setValue}  favor={favor}    setFavor={setFavor}       />}></Route>
    <Route path='/favour' element={<Addfavorite    value={value} setValue={setValue}   favor={favor}    setFavor={setFavor}  />}></Route>

  </Routes>
  
  </BrowserRouter>






  </>
  )
}
root.render(
<>
<Bapp/>

</>
);

