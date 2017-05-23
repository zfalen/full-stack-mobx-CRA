import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import DevTools from 'mobx-react-devtools';
import { observable, action, computed } from 'mobx';
import { observer, Provider } from 'mobx-react';

class Store {
  @observable thingProp = 100

  @action updateThing() {
    this.thingProp = Math.round(Math.random() * 100)
  }

  @computed get mult() {
    return this.thingProp*1337;
  }
}

const appState = new Store();

@observer
class Index extends React.Component {
  render(){
    return (
      <Provider store={appState}>
        <App />
      </Provider>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);


if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <NextApp />,
      document.getElementById('root')
    )
  })
}


const mobxDevToolsDiv = document.createElement('div');
mobxDevToolsDiv.id = 'mobxDevToolsDiv';
document.body.appendChild(mobxDevToolsDiv);

ReactDOM.render(
  <DevTools />,
  document.getElementById('mobxDevToolsDiv')
);
