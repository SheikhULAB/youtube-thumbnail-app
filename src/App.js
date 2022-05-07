import './App.css';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import Sidebar from './components/SIdebar/Sidebar';

function App() {
  return (
    <div className="app">
       <Header />
       <div className='app__page'>
         <Sidebar />
         <MainContainer />
       </div>
     
    </div>
  );
}

export default App;
