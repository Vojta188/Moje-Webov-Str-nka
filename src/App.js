
import './App.css';
import FunctionHeader from './component/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './component/body';
import NameForm from './component/Formular';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <FunctionHeader/>
      <Body/>
      <NameForm/>
      <Footer/>
    </div>
  );
}

export default App;
