import logo from './logo.svg';
import './App.css';
import Myprofile from './components/myprofile';
import Mysearch from './components/searchbar';

const App =()=> {

  const searchp=
  [
    "Dileep",
    "Company",
    "About",
    "LinkedIn",
    "Contact us"
  ]
  const linkedin = "www.linkedin.com/in/dileep1997"
  return (
   <div>
    
    <Myprofile/>
    <Mysearch newsearch={searchp} linked = {linkedin}/>
   
   </div>
   
  );
}

export default App;
