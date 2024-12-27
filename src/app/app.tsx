import AppProvider from "./provider/provider";
import Router from "./routes/router";

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
