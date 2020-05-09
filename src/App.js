import React from 'react';

import { Admin, Resource, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import {apiAddress} from "./options";

// LOCALIZATION:
// import polyglotI18nProvider from 'ra-i18n-polyglot';
// import russianMessages from 'ra-language-russian';
//
// const i18nProvider = polyglotI18nProvider(() => russianMessages, 'ru');

// AUTH PROVIDER
// const httpClient = (url, options = {}) => {
//       if (!options.headers) {
//             options.headers = new Headers({ Accept: 'application/json' });
//       }
//       const token = localStorage.getItem('token');
//       options.headers.set('Authorization', `Bearer ${token}`);
//       return fetchUtils.fetchJson(url, options);
// };

// const dataProvider = jsonServerProvider(apiAddress, httpClient);
const dataProvider = jsonServerProvider(apiAddress);

const App = () => (
    <Admin dataProvider={dataProvider}>

    </Admin>
);

export default App;
