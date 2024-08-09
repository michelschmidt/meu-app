import './App.css';
import Welcome from './components/Welcome/Welcome';
import Reverse from './components/Reverse/Reverse';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <Welcome nome="Michel" sobrenome="Schmidt"/>
      <div className="reverse">
        <p className="app-text">Desifre a palavra emblemática sobre o Mundo da Pizza:</p>
        <Reverse>Pizza: a desculpa perfeita!</Reverse>
      </div>
      <TodoList/>
    </div>
  );
}

export default App;
