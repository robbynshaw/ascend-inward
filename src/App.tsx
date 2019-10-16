import * as React from 'react';
import { StylesProvider } from '@material-ui/core'
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import WithSplashScreen from './hoc/WithSplashScreen';

class App extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  
  render() {
    return (
      <StylesProvider injectFirst>
        <WithSplashScreen>
          <Layout>
            <HomePage />
          </Layout>
        </WithSplashScreen>
      </StylesProvider>
    );
  }
}

export default App;
