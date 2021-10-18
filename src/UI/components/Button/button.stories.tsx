/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */

import React from 'react';

import { Button } from './index';

export default {
    title: 'Button',
    component: Button,
};

const Template = (args) => <div style={{ marginTop: 60, width: 400 }}> <Button {...args} /></div>;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
    children: 'Button',
    onClick: () => {
        alert('Botão Pressionado');
    }
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
    variant: 'primary',
    children: 'Button',
    loading: true,
};

export const PrimaryHeight30Ppx = Template.bind({});
PrimaryHeight30Ppx.args = {
    variant: 'primary',
    children: 'Button 30px',
    height: "30px",
    onClick: () => {
        alert('Botão Pressionado');
    }
};

export const PrimaryHeight30PpxLoading = Template.bind({});
PrimaryHeight30PpxLoading.args = {
    variant: 'primary',
    children: 'Button 30px',
    height: "30px",
    widthCircle: "12px",
    heightCircle: "12px",
    loading: true,
};

export const PrimaryFontSize = Template.bind({});
PrimaryFontSize.args = {
    variant: 'primary',
    children: 'Button fontSize',
    fontSize: "24px",
    onClick: () => {
        alert('Botão Pressionado');
    }
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    children: 'Button secondary',
    onClick: () => {
        alert('Botão Pressionado');
    }
};

export const SecondaryLoading = Template.bind({});
SecondaryLoading.args = {
    variant: 'secondary',
    children: 'Button secondary',
    loading: true,
};

export const Secondary30Ppx = Template.bind({});
Secondary30Ppx.args = {
    variant: 'secondary',
    children: 'Button secondary 30px',
    height: "30px",
    widthCircle: "24px",
    heightCircle: "24px",
    onClick: () => {
        alert('Botão Pressionado');
    }
};

export const Secondary30PpxLoading = Template.bind({});
Secondary30PpxLoading.args = {
    variant: 'secondary',
    children: 'Button secondary 30px',
    height: "30px",
    widthCircle: "13px",
    heightCircle: "13px",
    loading: true,
};

export const SecondaryFontSize = Template.bind({});
SecondaryFontSize.args = {
    variant: 'secondary',
    children: 'Button secondary font size',
    fontSize: "24px",
    onClick: () => {
        alert('Botão Pressionado');
    }
};
