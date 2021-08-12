import { Page, Header, HeaderTitle, Body } from 'blue-react';
import React = require('react');

import { appLogo, appTitle, getPhrase } from '../shared';

export default function SecondPage() {
  return (
    <Page>
      <Header>
        <HeaderTitle logo={appLogo} appTitle={appTitle}>
          {getPhrase('HELLO_WORLD')}
        </HeaderTitle>
      </Header>

      <Body containerClass="container">
        <h1 className="mt-3">Another page</h1>
      </Body>
    </Page>
  );
}
