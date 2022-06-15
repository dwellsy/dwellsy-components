/* src/App.jsx */
import "./App.css";
import { Button }from "./components/buttons";

function App() {
  return (
    <div className="text-center">
      <div className="py-3 pt-8">
        <Button primary label="Primary" />
      </div>

      <div className="py-1">
        <Button secondary label="Secondary" />
      </div>

      <div className="py-1">
        <Button label="Normal" />
      </div>

    </div>
  );
}

export default App;
