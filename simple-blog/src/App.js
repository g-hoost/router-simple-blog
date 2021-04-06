import './App.css';
import
{
  BrowserRouter as Router,
  Switch,
  Route,
  // useParams
} from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import BlogDetails from "./Components/BlogDetails";



export default function App()
{
  return (

    <Router>
      <div className="App">
        <Header></Header>
        <Switch>

          <Route exact path="/"><Home /></Route>
          <Route path="/blog"><Blog /></Route>
          <Route path="/:id/blog"><BlogDetails /></Route>
          <Route path="/contact"><Contact /></Route>



        </Switch>
      </div>
    </Router >
  );
}
