import './App.css';

import './Form.js'
import Form from "./Form"
/* import Headerbar from './Headerbar'; */
import Ani from './Ani';
import Prac from './Prac';
import {Routes,Route, Link} from 'react-router-dom';



function App()
{
  return(
    <div>
    
    <Ani/>
    <Prac/>
    
    </div>
  );
}
export default App;