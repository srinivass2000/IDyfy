import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/home";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import FeedPage from "./components/Feed_Page/feedpage";
import Notification from "./components/Notification/notification";
import Starred_ideas from "./components/Starred_Ideas/starred_ideas";
import Profile from "./components/Profile/Profile";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/feed" exact component={FeedPage} />
          <Route path="/notification" exact component={Notification} />
          <Route path="/starred" exact component={Starred_ideas} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
