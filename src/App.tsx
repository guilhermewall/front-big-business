import "./App.css";
import Provider from "./Contexts/Provider";
import { RoutesProvider } from "./Routes";

function App() {
  return (
    <Provider>
      <RoutesProvider />
    </Provider>
  );
}

export default App;
