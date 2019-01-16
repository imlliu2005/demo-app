import React from 'react';

import { storiesOf } from '@storybook/react';
import { Button } from '../components/Button';
import { HelloWord } from '../components/HelloWord';

// Button
storiesOf('Button', module)
  .add('with text', () => <Button/>);

// HelloWord
storiesOf('HelloWord', module)
  .add('hello', () => <HelloWord/>);

