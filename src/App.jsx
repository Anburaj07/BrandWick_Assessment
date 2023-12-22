import styled from 'styled-components';
import './App.css';
import AllRoutes from './components/AllRoutes';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <DIV className="App">
      <Sidebar/>
      <AllRoutes/>
    </DIV>
  );
}

export default App;

const DIV=styled.div`
    display: flex;
`