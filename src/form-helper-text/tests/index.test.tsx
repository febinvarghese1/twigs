import React from 'react';
import 'jest';
import '@testing-library/jest-dom';
import { createRoot } from 'react-dom/client';
import { act } from 'react-test-renderer';
import { render } from '@testing-library/react';
import { FormHelperText } from '../index';

describe('Form Helper Text', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div!);
    act(() => {
      root.render(<FormHelperText>Form helper text</FormHelperText>);
      root.unmount();
    });
  });

  it('renders Form helper text correctly', () => {
    const { getByTestId } = render(
      <FormHelperText>Simple form helper text</FormHelperText>,
    );
    const formHelperText = getByTestId('helper-text');

    expect(formHelperText).toHaveTextContent('Simple form helper text');
  });
});
