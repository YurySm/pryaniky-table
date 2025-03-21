import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss'
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator';

const preview: Preview = { 
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        RouterDecorator(),
    ],
};

export default preview;
