import './App.css';
import ToggleTheme from './components/ToggleTheme';
import Todo from './components/Todo'

function App() {
  return (
    <>
      <h1>What to do?</h1>
      <section>
        <Todo />
        
      </section>
      <div className="mode">
        <ToggleTheme/>
      </div>
    </>
  );
}

export default App;
