import React from 'react';
import { storiesOf } from '@storybook/react';
import ColorSelector1 from './ColorSelector1';
import ColorSelector2 from './ColorSelector2';

const colors = [
  {
    label: 'blue',
    value: 'blue',
    color: 'blue',
  },
  {
    label: 'green',
    value: '#00A94E',
    color: 'green',
  },
  {
    label: 'red',
    value: 'red',
    color: 'red',
  },
];

storiesOf('Input Components | Color Selector', module).add('option 1', () => (
  <ColorSelector1 options={colors} value={colors[0].value} />
));

storiesOf('Input Components | Color Selector', module).add('option 2', () => (
  <ColorSelector2 options={colors} value={colors[0].value} />
));
