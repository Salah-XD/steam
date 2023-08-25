import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Card from "./components/Card";
import Grid from "./components/Grid";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Card />
      <Grid />
    </div>
  );
}

export default App;
