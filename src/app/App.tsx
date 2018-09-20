import { hot } from 'react-hot-loader';
import * as React from 'react';
import Hello from './components/Hello';
import { registerServiceWorker } from './sw/register';

const App = class App extends React.Component<{}> {
    render() {
        return <Hello />;
    }
}

registerServiceWorker();

export default hot(module)(App);
