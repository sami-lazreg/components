import ProfilPhoto from "./component/ProfilPhoto"
import FullName from "./component/FullName"
import Address from "./component/Address"
import './App.css';

function App() {
  return (
    <div className="App" style={{marginTop:"100px",marginLeft:"400px", marginRight:"400px",background:"black", height:"450px",paddingTop:"60px"}}>
      <ProfilPhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
