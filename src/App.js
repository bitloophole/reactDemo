import logo from './logo.svg';
import './App.css';
import ViewPage from './component/viewPage';
import Navbar from './component/navbar';

function App() {
  return (
    <React.Fragment>
       <Navbar></Navbar>
      <ViewPage></ViewPage>
    </React.Fragment>
  );
}

export default App;
