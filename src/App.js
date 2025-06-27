import AllMerge1 from './AllMerge/AllMerge1';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Bottom from './Components/Parts/Bottom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from './ProdComp/Product';
import ReactDrop from './Topics/ReactDrop';
import NodejsDrop from './Topics/NodejsDrop';
import ExpressjsDrop from './Topics/ExpressjsDrop';
import MongoDbDrop from './Topics/MongoDbDrop';
import JavasBank from './QaABank/JavasBank';


function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AllMerge1 />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Topics/ReactDrop" element={<ReactDrop/>} />
        <Route path='/Topics/NodejsDrop' element={<NodejsDrop/>} />
        <Route path='/Topics/ExpressjsDrop' element={<ExpressjsDrop/> }/>
        <Route path='/Topics/MongoDbDrop' element={<MongoDbDrop/>} />
        <Route path='/QaABank/JavasBank' element={<JavasBank />} />
      </Routes>
      <Bottom/>
     </Router>
    </div>
  );
}

export default App;
