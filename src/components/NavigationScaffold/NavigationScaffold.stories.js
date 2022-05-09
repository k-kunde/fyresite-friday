import NavigationScaffold from './NavigationScaffold';

import React from 'react';

export default {
    title: 'Navigation Scaffold',
    component: NavigationScaffold,
};

const Template = (_args) => {
    const INIT_ARGS = {};

    const args = { ...INIT_ARGS, ..._args };

    return <NavigationScaffold {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
