import Routes from "routes";
import "styles/App.css";
import "styles/General.css";
import "styles/config-bootstrap.sass";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "contexts";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
