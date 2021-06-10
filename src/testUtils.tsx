import React, { ComponentType, ReactNode } from 'react';
import {
  render as rtlRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';
import { IntlProvider } from 'react-intl';
import rootMessagesDe from './rootMessages.de';

function render(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  renderOptions: RenderOptions = {}
): RenderResult {
  const Wrapper: ComponentType = ({ children }: { children?: ReactNode }) => {
    return (
      <IntlProvider locale="de" messages={rootMessagesDe}>
        {children}
      </IntlProvider>
    );
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
