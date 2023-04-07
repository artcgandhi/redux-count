import "./App.css";
import ButtonAmount from "./Component/ButtonAmount";
import ButtonAsync from "./Component/ButtonAsync";
import Counter from "./Component/Counter";
import Input from "./Component/Input";
import CounterClass from "./ClassComponent/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <Input />
      <ButtonAmount /> | <ButtonAsync />
      <hr />
      <CounterClass />
    </div>
  );
}

export default App;
