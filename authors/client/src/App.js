
import { BrowserRouter, Route } from 'react-router-dom';
import UpdateAuthor from './Views/UpdateAuthor';
import './App.css';
import Main from './Views/Main';
import AuthorDetail from './Views/AuthorDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/api">
          <Main/>
        </Route>
        <Route exact path="/api/author/:id">
          <AuthorDetail/>
        </Route>
        <Route exact path="/api/author/:id/edit">
          <UpdateAuthor/>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
