import "./App.css";
import NavBar from "./components/NavBar";
import Progress from "./components/Progress";
import SLinputs from "./components/SLinputs";

function App() {
  const datas = [
    {
      name: "sahil singh",
      age: 50,
    },
    {
      name: "ruchi sondarva",
      age: 49,
    },
    {
      name: "Avika singh",
      age: 100,
    },
  ];

  return (
    <>
      <NavBar />
      <Progress />
      {/* <SLinputs /> */}
    </>
  );
}

export default App;
