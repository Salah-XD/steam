import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Card from "./components/Card";
import Grid from "./components/Grid";
import Present from "./components/Present";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Card />
      <Grid />
      <Present />
    </div>
  );
}

export default App;
