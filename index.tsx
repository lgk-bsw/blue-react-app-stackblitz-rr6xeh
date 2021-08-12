import { Grid, MenuItem, SidebarMenu } from 'blue-react';
import React = require('react');
import {
  Archive,
  ArchiveFill,
  CheckCircleFill,
  ExclamationCircleFill,
  House,
  HouseFill,
  InfoCircleFill,
  List,
  XCircleFill
} from 'react-bootstrap-icons';
import { render } from 'react-dom';
import HomePage from './pages/HomePage';
import SecondPage from './pages/SecondPage';
import './styles/main.scss';

function App() {
  return (
    <Grid
      expandSidebar
      sidebarToggleIconComponent={<List />}
      pages={[
        {
          name: 'home',
          component: <HomePage />
        },
        {
          name: 'second',
          component: <SecondPage />
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
        <MenuItem
          href="#/home"
          icon={<House />}
          iconForActive={<HouseFill />}
          label="Home"
          isHome
        />
        <MenuItem
          href="#/second"
          icon={<Archive />}
          iconForActive={<ArchiveFill />}
          label="Second"
        />
      </SidebarMenu>
    </Grid>
  );
}

render(<App />, document.getElementById('root'));
