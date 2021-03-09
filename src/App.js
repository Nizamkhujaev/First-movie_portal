import './assets/styles/app.scss'

import HomePage from './pages/homePage';
import PopularsPage from './pages/popularsPage';
import MoviesPage from './pages/moviesPage';
import SingleMoviePage from './pages/singleMovie';
import Header from './containers/header/header'
import TvShows from './pages/TvShows';
import SingleTv from './containers/singleTv/singleTv';
import AdviseActor from './containers/adviseActor/adviseActor';
import Footer from './containers/footer/footer';
import SearchResults from './pages/searchResults'

import {
  BrowserRouter as Router,
  Switch,
  Route
}
 from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

        <Header/>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/popular" component={PopularsPage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route exact path="/movie/:id" component={SingleMoviePage} />
          <Route exact path="/tv-show" component={TvShows} />
          <Route exact path="/tv/:id" component={SingleTv}/>
          <Route exact path="/movie/actor/:id" component={AdviseActor} />
          <Route exact path="/search/:searchQuery" component={SearchResults} />
        </Switch>

        <Footer/>

      </div>  
    </Router>
  );
}

export default App;
