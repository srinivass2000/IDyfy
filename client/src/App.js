import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Loader from "./components/Loader/loader";

const Home = lazy(() => import("./components/Home/home"));
const FeedPage = lazy(() => import("./components/Feed_Page/feedpage"));
const Notification = lazy(() =>
  import("./components/Notification/notification")
);
const Starred_ideas = lazy(() =>
  import("./components/Starred_Ideas/starred_ideas")
);
const Profile = lazy(() => import("./components/Profile/Profile"));
const MyIdeas = lazy(() => import("./components/MyIdeas/myideas"));
const Idea = lazy(() => import("./components/Idea/idea"));
const Feature = lazy(() => import("./components/feature/feature"));
const IdeaEdit = lazy(() => import("./components/Idea/ideaedit"));
const FeatureEdit = lazy(() => import("./components/feature/editFeature"));
const ProfileEdit = lazy(() => import("./components/Profile/profileedit"));
// import { isMobile } from "react-device-detect";
const Error = lazy(() => import("./components/error/error_500"));
const VerifyEmail = lazy(() => import("./components/verifyemail/verify"));
const Protectedroute = lazy(() => import("./components/protectedroutes"));
const ResetPassword = lazy(() =>
  import("./components/verifyemail/resetpassword")
);
const CreateIdea = lazy(() => import("./components/NewIdeas/createIdea"));
const Search = lazy(() => import("./components/search/search"));
const CreateFeature = lazy(() =>
  import("./components/createFeature/createFeature")
);
const GraphTest = lazy(() => import("./components/graph/test_graph"));
const Graph = lazy(() => import("./components/graph/graph"));
const Graph_2 = lazy(() => import("./components/graph/graph_2"));
const Graph_3 = lazy(() => import("./components/graph/graph_3"));
const Graph_4 = lazy(() => import("./components/graph/graph_4"));
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Switch>
            <Route path="/" exact component={Home} />
            <Protectedroute path="/feed" exact component={FeedPage} />
            <Protectedroute
              path="/notification"
              exact
              component={Notification}
            />
            <Protectedroute path="/starred" exact component={Starred_ideas} />
            <Protectedroute path="/profile" exact component={Profile} />
            <Protectedroute path="/myideas" exact component={MyIdeas} />
            <Protectedroute path="/createIdea" exact component={CreateIdea} />
            <Protectedroute
              path="/createFeat"
              exact
              component={CreateFeature}
            />
            <Protectedroute path="/idea/:id" exact component={Idea} />
            <Protectedroute path="/feature" exact component={Feature} />
            <Protectedroute path="/graphtest" exact component={GraphTest} />
            <Protectedroute path="/graph" exact component={Graph} />
            <Protectedroute path="/graph_2" exact component={Graph_2} />
            <Protectedroute path="/graph_4" exact component={Graph_4} />
            <Protectedroute
              path="/graph_3/:idea_id"
              exact
              component={Graph_3}
            />
            <Protectedroute path="/ideaEdit/:id" exact component={IdeaEdit} />
            <Protectedroute path="/feaEdit" exact component={FeatureEdit} />
            <Protectedroute path="/profileEdit" exact component={ProfileEdit} />
            <Protectedroute path="/search/:key" exact component={Search} />
            <Route path="/email/verify/:id" exact component={VerifyEmail} />
            <Route path="/passwordreset/:id" exact component={ResetPassword} />
            <Route path="/" component={Error} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
