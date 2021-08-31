
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home.js';
import Article from './pages/Article.js';
import About from './pages/About.js';
import NotFound from './pages/NotFound.js';
import NavBar from "./NavBar.js";
import ArticlesListPage from './pages/ArticlesListPage.js';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="pageBody">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/article/:name" component={Article} />
            <Route path="/articlesListPage" component={ArticlesListPage} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
