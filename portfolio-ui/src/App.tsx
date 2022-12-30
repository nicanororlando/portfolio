import Routes from "routes";
import "App.css";
import "styles/config-bootstrap.sass";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
