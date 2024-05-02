import './App.css'
import LineChart from './LineChart/LineChart'
import NavBar from './NavBar/NavBar'
import PriceOptions from './components/priceOptions/PriceOptions'
// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {

  return (
    <>
    <NavBar></NavBar>
    <PriceOptions></PriceOptions>
    <LineChart></LineChart>

      {/* <DaisyNav></DaisyNav> */}
      
    </>
  )
}

export default App
