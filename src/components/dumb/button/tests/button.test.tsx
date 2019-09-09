import renderer from './node_modules/react-test-renderer';
import React from './node_modules/react';

import { Button } from '../Button';

describe('Button', () => {
  it('Renders with text', () => {
    const tree = renderer.create(<Button content="My Button" />);
    expect(tree).toMatchSnapshot();
  });
});
