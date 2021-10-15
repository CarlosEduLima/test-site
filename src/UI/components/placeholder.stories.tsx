/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */

import React from 'react';

import { Placeholder } from './placeholder';

export default {
    title: 'Example/Placeholder',
    component: Placeholder,
};

const Template = (args) => <Placeholder {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button secondary',
};
