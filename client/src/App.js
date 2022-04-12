import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Loader from "./components/Loader/loader";
// const AdminNavbar = lazy(() => import("./components/Admin/Navbar/AdminNavbar"));
const Home = lazy(() => import("./components/Home/home"));
const FeedPage = lazy(() => import("./components/Feed_Page/feedpage"));
const Notification = lazy(() =>
  import("./components/Notification/notification")
);
const Starred_ideas = lazy(() =>
  import("./components/Starred_Ideas/starred_ideas")
);
const Admin = lazy(() => import("./components/Admin/admin"));
const User_table = lazy(() => import("./components/Admin/tables/User_table"));
const Project_table = lazy(() =>
  import("./components/Admin/tables/Project_table")
);
const Profile = lazy(() => import("./components/Profile/Profile"));
const MyIdeas = lazy(() => import("./components/MyIdeas/myideas"));
const Idea = lazy(() => import("./components/Idea/idea"));
const Feature = lazy(() => import("./components/feature/feature"));
const IdeaEdit = lazy(() => import("./components/Idea/ideaedit"));
const FeatureEdit = lazy(() => import("./components/feature/editFeature"));
const ProfileEdit = lazy(() => import("./components/Profile/profileedit"));
const Error = lazy(() => import("./components/error/error_404"));
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
const PrivacyPolicy = lazy(() =>
  import("./components/policies/privacy-policy")
);
const TermsAndConditions = lazy(() =>
  import("./components/policies/terms_and_conditions")
);

const Graph_body = lazy(() => import("./components/graph/graph_body"));

const home = ({ match }) => {
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
            <Route path={match.url} exact={true} component={Home} />
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
              path="/createfeature/:idea_id/:parent_id"
              exact
              component={CreateFeature}
            />
            <Protectedroute path="/idea/:id" exact component={Idea} />
            <Protectedroute
              path="/feature/:idea_id/:feature_id"
              exact
              component={Feature}
            />
            <Protectedroute
              path="/graph/:idea_id"
              exact
              component={Graph_body}
            />
            <Protectedroute path="/ideaEdit/:id" exact component={IdeaEdit} />
            <Protectedroute path="/feaEdit" exact component={FeatureEdit} />
            <Protectedroute path="/profileEdit" exact component={ProfileEdit} />
            <Protectedroute path="/search/:key" exact component={Search} />
            <Route path="/email/verify/:id" exact component={VerifyEmail} />
            <Route path="/passwordreset/:id" exact component={ResetPassword} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/T&C" component={TermsAndConditions} />
            <Route path="/" component={Error} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

const AdminSection = ({ match }) => {
  return (
    <div>
      <BrowserRouter>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          {/* <AdminNavbar /> */}
          <Switch>
            <Route path={match.url} exact component={Admin} />
            <Route path={match.url + "/users"} exact component={User_table} />
            <Route
              path={match.url + "/projects"}
              exact
              component={Project_table}
            />
            <Route path="/" component={Error} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={AdminSection} />
          <Route path="/" component={home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
