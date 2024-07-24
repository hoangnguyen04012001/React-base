import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';
/**
 * 2 components: class component / function component ( function, arrow)
 * JSX
 */

function App() {
  // const  App = () =>  {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          XIN CHÀO MỌI NGƯỜI - TÔI TÊN  NGUYỄN HOÀNG

        </p>

        <MyComponent />

      </header>
    </div>
  );
}

export default App;
