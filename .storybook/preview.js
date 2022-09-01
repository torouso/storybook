import '../src/index.css';
// import 'antd/dist/antd.css';
// import '../assets/styles/antd.less';
// require('../assets/styles/antd.less');

// Registers the msw addon
import { initialize, mswDecorator } from 'msw-storybook-addon';
// Initialize MSW
initialize();
// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
