import React from 'react';

import Input from './index';
import colors from '../../../utils/colors'
import { mockInputSearch } from '../../../utils/input'

export default {
    title: 'Input',
    component: Input,
};

const Template = (args) => <div style={{ display: 'grid', justifyItems: 'center', justifyContent: 'start', width: 400, backgroundColor: colors.purple, padding: 10, marginLeft: 12, marginRight: 12 }}><Input {...args} /></div>;

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
    fontSize: '16px',
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
    colorIcon: "red",
    borderRadius: "10px",
    labelFontSize: 16,
    marginRight: 10,
    borderColor: 'black',
    fontSize: '16px',
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
    fontSize: '16px',
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
    fontSize: '16px',
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
    fontSize: '16px',
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
    fontSize: '16px',
    onChange: (value: any) => {
        console.log(value.currentTarget.value);
    },
};

export const InputSearch = Template.bind({});
InputSearch.args = {
    icon: "search",
    name: "search",
    label: "",
    secureTextEntry: false,
    required: true,
    inputError: "",
    type: 'other',
    typeInput: "text",
    backgroundColor: 'white',
    height: 32,
    color: 'black',
    size: 28,
    padding: "12px",
    fontWeight: "bold",
    colorLabel: 'black',
    colorIcon: colors.purple,
    borderRadius: "5px",
    labelFontSize: 16,
    marginRight: -19,
    borderColor: 'black',
    placeholder: "Pesquisar aqui",
    dataSearch: mockInputSearch,
    marginLeft: 18,
    fontSize: '16px',
    filterPreviewSearch: (datas, data) => {
        return [datas, data]
    },
    onChange: (value: any) => {
        console.log(value.currentTarget.value);
    },
    returnName: (value: any) => {
        return value.name
    }
};

export const InputArea = Template.bind({});
InputArea.args = {
    icon: "textArea",
    name: "textArea",
    label: "",
    secureTextEntry: false,
    required: true,
    inputError: "",
    type: 'other',
    typeInput: "text",
    backgroundColor: 'white',
    height: '100%',
    color: 'black',
    size: 28,
    padding: "12px",
    fontWeight: "bold",
    colorLabel: 'black',
    colorIcon: colors.purple,
    borderRadius: "5px",
    labelFontSize: 16,
    marginRight: -19,
    borderColor: 'black',
    placeholder: "Pesquisar aqui",
    dataSearch: mockInputSearch,
    marginLeft: 18,
    rows: 10,
    cols: 33,
    fontSize: '16px',
    filterPreviewSearch: (datas, data) => {
        return [datas, data]
    },
    onChange: (value: any) => {
        console.log(value.currentTarget.value);
    },
    returnName: (value: any) => {
        return value.name
    }
};
