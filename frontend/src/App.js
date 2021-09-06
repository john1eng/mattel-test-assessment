import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import HistoryPage from "./components/HistoryPage";
import HomePage from "./components/HomePage";
import SubmitRequestPage from "./components/SubmitRequestPage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter basename="/spring-boot-tomcat">
      <div className="App">
        <Header />
        <Switch>
          <Route path="/admin/history">
            <HistoryPage />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>it
          <Route path="/submit">
            <SubmitRequestPage />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
