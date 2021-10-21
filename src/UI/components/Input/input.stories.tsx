/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */

import React from 'react';

import Input from './index';
import colors from '../../../utils/colors'

export default {
    title: 'Input',
    component: Input,
};

const Template = (args) => <div style={{ width: 400, backgroundColor: colors.purple, padding: 28, marginLeft: 12, marginRight: 12 }}><Input {...args} /></div>;

export const InputEmail = Template.bind({});
InputEmail.args = {
    name: "email",
    icon: "email",
    label: "Email",
    secureTextEntry: false,
    required: true,
    inputError: "",
    type: 'other',
    typeInput: "email",
    backgroundColor: colors.labelInput,
    height: 32,
    color: colors.purple,
    size: 24,
    borderRadius: "10px",
    labelFontSize: 16,
    padding: "12px",
    fontWeight: "bold",
    colorLabel: 'black',
    colorIcon: "black",
    marginRight: 10,
    borderColor: '#666666',
    onChange: (value: any) => {
        console.log(value.currentTarget.value);
    },
    placeholder: "exemplo@gmail.com"
};

export const InputEmailWithoutLabel = Template.bind({});
InputEmailWithoutLabel.args = {
    name: "email-without",
    icon: "email",
    label: "",
    secureTextEntry: false,
    required: true,
    inputError: "",
    type: 'other',
    typeInput: "email",
    backgroundColor: colors.labelInput,
    height: 32,
    color: colors.purple,
    size: 24,
    borderRadius: "10px",
    labelFontSize: 16,
    padding: "12px",
    fontWeight: "bold",
    colorLabel: 'black',
    colorIcon: "black",
    marginRight: 10,
    borderColor: '#666666',
    onChange: (value: any) => {
        console.log(value.currentTarget.value);
    },
    placeholder: "exemplo@gmail.com"
};



export const InputPassword = Template.bind({});
InputPassword.args = {
    name: "password",
    icon: "password",
    label: "Senha",
    secureTextEntry: true,
    required: true,
    inputError: "",
    type: 'other',
    typeInput: "password",
    backgroundColor: 'white',
    height: 32,
    color: 'black',
    size: 24,
    padding: "12px",
    fontWeight: "bold",
    colorLabel: 'white',
    colorIcon: "black",
    borderRadius: "10px",
    labelFontSize: 16,
    marginRight: 10,
    borderColor: 'black',
    onChange: (value: any) => {
        console.log(value.currentTarget.value);
    },
    placeholder: "• • • • • • • • • • • • •"
};

export const InputPasswordlWithoutLabel = Template.bind({});
InputPasswordlWithoutLabel.args = {
    name: "password",
    icon: "password",
    label: "",
    secureTextEntry: true,
    required: true,
    inputError: "",
    type: 'other',
    typeInput: "password",
    backgroundColor: 'white',
    height: 32,
    color: 'black',
    size: 24,
    padding: "12px",
    fontWeight: "bold",
    colorLabel: 'white',
    colorIcon: "black",
    borderRadius: "10px",
    labelFontSize: 16,
    marginRight: 10,
    borderColor: 'black',
    onChange: (value: any) => {
        console.log(value.currentTarget.value);
    },
    placeholder: "• • • • • • • • • • • • •"
};

export const InputText = Template.bind({});
InputText.args = {
    name: "text",
    icon: "text",
    label: "Texto",
    secureTextEntry: false,
    required: true,
    inputError: "",
    type: 'other',
    typeInput: "text",
    backgroundColor: 'white',
    height: 32,
    color: 'black',
    size: 24,
    padding: "12px",
    fontWeight: "bold",
    colorLabel: 'black',
    colorIcon: "white",
    borderRadius: "10px",
    labelFontSize: 16,
    marginRight: 10,
    borderColor: 'black',
    onChange: (value: any) => {
        console.log(value.currentTarget.value);
    },
    placeholder: "Insira aqui o texto"
};

export const InputTextWithoutLabel = Template.bind({});
InputTextWithoutLabel.args = {
    name: "text",
    icon: "text",
    label: "",
    secureTextEntry: false,
    required: true,
    inputError: "",
    type: 'other',
    typeInput: "text",
    backgroundColor: 'white',
    height: 32,
    color: 'black',
    size: 24,
    padding: "12px",
    fontWeight: "bold",
    colorLabel: 'black',
    colorIcon: "white",
    borderRadius: "10px",
    labelFontSize: 16,
    marginRight: 10,
    borderColor: 'black',
    onChange: (value: any) => {
        console.log(value.currentTarget.value);
    },
    placeholder: "Insira aqui o texto"
};

export const InputPhone = Template.bind({});
InputPhone.args = {
    icon: "phone",
    name: "telephone",
    label: "Celular",
    secureTextEntry: false,
    required: true,
    inputError: "",
    type: 'other',
    typeInput: "text",
    backgroundColor: 'white',
    height: 32,
    color: 'black',
    size: 24,
    padding: "12px",
    fontWeight: "bold",
    colorLabel: 'black',
    colorIcon: "white",
    borderRadius: "10px",
    labelFontSize: 16,
    marginRight: 10,
    borderColor: 'black',
    placeholder: "(  ) _ ____-____",
    onChange: (value: any) => {
        console.log(value.currentTarget.value);
    },
};

export const InputPhoneWithoutLabel = Template.bind({});
InputPhoneWithoutLabel.args = {
    icon: "phone",
    name: "telephone",
    label: "",
    secureTextEntry: false,
    required: true,
    inputError: "",
    type: 'other',
    typeInput: "text",
    backgroundColor: 'white',
    height: 32,
    color: 'black',
    size: 24,
    padding: "12px",
    fontWeight: "bold",
    colorLabel: 'black',
    colorIcon: "white",
    borderRadius: "10px",
    labelFontSize: 16,
    marginRight: 10,
    borderColor: 'black',
    placeholder: "(  ) _ ____-____",
    onChange: (value: any) => {
        console.log(value.currentTarget.value);
    },
};

export const InputCep = Template.bind({});
InputCep.args = {
    icon: "cep",
    name: "cep",
    label: "CEP",
    secureTextEntry: false,
    required: true,
    inputError: "",
    type: 'other',
    typeInput: "text",
    backgroundColor: 'white',
    height: 32,
    color: 'black',
    size: 24,
    padding: "12px",
    fontWeight: "bold",
    colorLabel: 'black',
    colorIcon: "white",
    borderRadius: "10px",
    labelFontSize: 16,
    marginRight: 10,
    borderColor: 'black',
    placeholder: "54245-127",
    onChange: (value: any) => {
        console.log(value.currentTarget.value);
    },
};

export const InputCepWithoutLabel = Template.bind({});
InputCepWithoutLabel.args = {
    icon: "cep",
    name: "cep",
    label: "",
    secureTextEntry: false,
    required: true,
    inputError: "",
    type: 'other',
    typeInput: "text",
    backgroundColor: 'white',
    height: 32,
    color: 'black',
    size: 24,
    padding: "12px",
    fontWeight: "bold",
    colorLabel: 'black',
    colorIcon: "white",
    borderRadius: "10px",
    labelFontSize: 16,
    marginRight: 10,
    borderColor: 'black',
    placeholder: "54245-127",
    onChange: (value: any) => {
        console.log(value.currentTarget.value);
    },
};

export const InputMoney = Template.bind({});
InputMoney.args = {
    icon: "money",
    name: "money",
    label: "Money",
    secureTextEntry: false,
    required: true,
    inputError: "",
    type: 'other',
    typeInput: "number",
    backgroundColor: 'white',
    height: 32,
    color: 'black',
    size: 24,
    padding: "12px",
    fontWeight: "bold",
    colorLabel: 'black',
    colorIcon: "white",
    borderRadius: "10px",
    labelFontSize: 16,
    marginRight: 10,
    borderColor: 'black',
    placeholder: "money",
    onChange: (value: any) => {
        console.log(value.currentTarget.value);
    },
};

export const InputMoneyWithoutLabel = Template.bind({});
InputMoneyWithoutLabel.args = {
    icon: "money",
    name: "money",
    label: "",
    secureTextEntry: false,
    required: true,
    inputError: "",
    type: 'other',
    typeInput: "number",
    backgroundColor: 'white',
    height: 32,
    color: 'black',
    size: 24,
    padding: "12px",
    fontWeight: "bold",
    colorLabel: 'black',
    colorIcon: "white",
    borderRadius: "10px",
    labelFontSize: 16,
    marginRight: 10,
    borderColor: 'black',
    placeholder: "money",
    onChange: (value: any) => {
        console.log(value.currentTarget.value);
    },
};
