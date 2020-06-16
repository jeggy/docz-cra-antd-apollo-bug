import React from 'react';
import { Layout } from 'antd';
import logo from './logo.svg';
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <Layout>
      <Layout.Header className="header">
        <img src={logo} alt="logo" />
        <span>Artist Search</span>
      </Layout.Header>
      <Layout.Content>
        <MyComponent />
      </Layout.Content>
    </Layout>
  );
}

export default App;
