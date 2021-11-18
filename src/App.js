import './App.css';
import AllData from './Components/AllData';
import Navbar from './Components/Navbar';


function App() {
  // const allData = data.map((e) => {
  //   console.log(e)
  // })
  return (
    <div className="App">
       <Navbar />
       <AllData />
    </div>
  );
}

export default App;
