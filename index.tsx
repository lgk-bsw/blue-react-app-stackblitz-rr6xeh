import { Grid, MenuItem, SidebarMenu } from 'blue-react';
import { Component } from 'react';
import React = require('react');
import {
  CheckCircleFill,
  ExclamationCircleFill,
  House,
  InfoCircleFill,
  List,
  XCircleFill
} from 'react-bootstrap-icons';
import { render } from 'react-dom';
import Hello from './Hello';
import HomePage from './pages/HomePage';
import './styles/main.scss';

interface AppProps {}
interface AppState {
  name: string;
}

function App() {
  return (
    <Grid
      expandSidebar
      sidebarToggleIconComponent={<List />}
      pages={[
        {
          name: 'home',
          component: <HomePage />
        }
      ]}
      statusIcons={{
        danger: <XCircleFill />,
        info: <InfoCircleFill />,
        success: <CheckCircleFill />,
        warning: <ExclamationCircleFill />
      }}
    >
      <SidebarMenu>
        <MenuItem href="#" icon={<House />} label="Home" isHome />
      </SidebarMenu>
    </Grid>
  );
}

render(<App />, document.getElementById('root'));
