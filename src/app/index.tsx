import { hot } from 'react-hot-loader';
import * as React from 'react';
import { render } from 'react-dom';

import { registerServiceWorker } from './sw/register';
import Shell from './components/AppShell';

registerServiceWorker();

const root = document.getElementById('root');

const AppShell = hot(module)(Shell);
render(<AppShell />, root);
