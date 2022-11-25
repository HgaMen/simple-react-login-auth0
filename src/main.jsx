import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { Auth0Provider } from '@auth0/auth0-react';

import { router } from './router';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-7h7y08q48tu1bjh6.us.auth0.com"
            clientId="AKWLOvTq9R9Wb5nt6fPadwmTTWW3SKcw"
            redirectUri={window.location.origin}
        >
            <RouterProvider router={router} />
        </Auth0Provider>
    </React.StrictMode>
);
