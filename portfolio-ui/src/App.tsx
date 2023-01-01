import Routes from "routes";
import "styles/App.css";
import "styles/General.css";
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
