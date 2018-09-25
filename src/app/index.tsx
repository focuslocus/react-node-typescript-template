import { hot } from 'react-hot-loader';
import * as React from 'react';
import { render } from 'react-dom';

import { registerServiceWorker, enablePushNotifications } from './sw/register';
import { AppShellComponent } from './components/AppShell';

registerServiceWorker();
enablePushNotifications();

const root = document.getElementById('root');

const AppShell = hot(module)(AppShellComponent);
render(<AppShell />, root);
