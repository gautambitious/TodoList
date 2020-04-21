import React from 'react';
import {Header} from './components/layouts/Header';
import {Content} from "./components/layouts/Content";

export const App = () => {
  return (
    <div className="App">
		<Header />
		<Content/>
    </div>
  );
}
