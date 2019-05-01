import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router';
import { history } from './js/redux/store/history';

function App() {
  return (
    <div className="App">
      <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
        <> { /* your usual react-router v4/v5 routing */ }
          <Switch>
            <Route exact path="/" render={() => (<div>Match</div>)} />
            <Route render={() => (<div>Miss</div>)} />
          </Switch>
        </>
      </ConnectedRouter>
    </div>
  );
}

export default App;
