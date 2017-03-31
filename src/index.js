import React, {Component} from 'react';
import { render } from 'react-dom'
import {Flex, Box} from 'reflexbox'
import ComponentApp from './ComponentApp'
import ShouldApp from './ShouldApp'
import PureApp from './PureApp'
import MutationApp from './MutationApp'
import ImmutableApp from './ImmutableApp'

const App = (props) => (
  <div style={{marginTop: 50, textAlign: 'center'}}>
    <h2>Optimizing React by Avoiding Reconciliation</h2>
    <p>Open the console to see the results...</p>
    <div style={{width: 450, margin: '0 auto', borderTop: '1px solid green'}}>
      <Flex column >
        <ComponentApp />
        <ShouldApp />
        <PureApp />
        <MutationApp />
        <ImmutableApp />
      </Flex>
      <div style={{height: 500}}>

      </div>
    </div>
  </div>
);

render(
  <App />, document.getElementById('root')
)

