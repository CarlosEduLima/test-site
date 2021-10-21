/* eslint-disable linebreak-style */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function*/
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
    useState,
    useEffect,
    useImperativeHandle,
    forwardRef,
    useCallback,
} from 'react';
import { TextInputMask } from 'react-masked-text';
import { Controller, useForm } from 'react-hook-form';
import { RHFInput } from 'react-hook-form-input';
import { BsFillEyeFill, BsEyeSlashFill, BsSearch } from 'react-icons/bs';
import InputMask from 'react-input-mask';
import IntlCurrencyInput from 'react-intl-currency-input'

import { TextInputAttributes } from './attributes';
import { filterPreviewSearch } from '../../../utils/functions';
import fonts from '../../../utils/fonts';
import colors from '../../../utils/colors';
import { InputProps, InputRef } from './interfaces';

import {
    Container,
    Label,
    ContainerInput,
    TextInput,
    ErrorText,
    ContainerTextAreaInput,
    TextInputArea
} from './style';

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    {
        name,
        icon,
        label,
        secureTextEntry,
        required,
        control = () => { },
        inputError,
        type = 'other',
        typeInput = 'text',
        backgroundColor = 'white',
        height = 26,
        color = 'black',
        size = 32,
        borderRadius = '60px',
        labelFontSize = 22,
        padding = '12px',
        fontWeight = '500',
        colorLabel = 'black',
        colorIcon = colors.labelInput,
        marginRight,
        borderColor,
        placeholder,
        ...rest
    }
) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const [isErrored, setIsErrored] = useState(false);
    const [inputSecureTextEntry, setInputSecureTextEntry] = useState(true);
    const { register, getValues, setFocus, setValue } = useForm();

    const Register = register(name);
    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);
    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!getValues(name));
    }, []);
    const handleIconClick = () => {
        setIsFocused(!isFocused);
        setInputSecureTextEntry(!inputSecureTextEntry);
    };

    useImperativeHandle(Register.ref, () => ({
        focus() {
            setFocus(name);
        },
    }));

    const onChangeTextMoney = (args: any) => ({
        value: args[0].nativeEvent.data,
    });

    const handleChange = (event, value, maskedValue) => {
        event.preventDefault();
        setValue(name, value);
    };

    const currencyConfig = {
        locale: 'pt-BR',
        formats: {
            number: {
                BRL: {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                },
            },
        },
    };

    useEffect(() => {
        if (icon == 'search') {
            //
        }
    }, []);

    useEffect(() => {
        if (inputError) {
            setIsErrored(true);
        } else {
            setIsErrored(false);
        }
    }, [inputError]);

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: [
                    `
                        ::-webkit-input-placeholder {
                        color: ${color};,
                        },
                    .money-input:-moz-placeholder {
                        color: ${color};
                        }
                    .money-input:focus {
                        box - shadow: 0 0 0 0;
                        outline: 0;
                    }
                        `
                ].join('\n')
            }}>
            </style>
            <Container>
                <Label colorLabel={colorLabel} fontWeight={fontWeight} labelFontSize={labelFontSize} for={name}>{
                    label}
                </Label>
                {type !== 'other' ? (
                    <ContainerInput borderColor={borderColor} padding={padding} borderRadius={borderRadius} isFocused={isFocused} isErrored={isErrored} backgroundColor={backgroundColor} height={height}>
                        {type === 'text' ? (
                            <Controller
                                control={control}
                                name={name}
                                render={({ field: { onChange } }) => (
                                    <TextInput
                                        {...TextInputAttributes(handleInputFocus, handleInputBlur)}
                                        onChange={(text) => {
                                            onChange(text.currentTarget.value);
                                        }}
                                        borderRadius={borderRadius}
                                        color={color}
                                        backgroundColor={backgroundColor}
                                        height={height}
                                        padding={padding}
                                        type={typeInput}
                                        id={name}
                                        placeholder={placeholder}
                                        required={required}
                                        {...rest}
                                    />
                                )}
                            />
                        ) : (
                            <Controller
                                control={control}
                                name={name}
                                render={({ field: { onChange, onBlur, value, name, ref } }) => (
                                    <TextInputMask
                                        style={{ width: '100%' }}
                                        type={typeInput}
                                        options={{
                                            mask: '99/99',
                                        }}
                                        color={color}
                                        value={value}
                                        height={height}
                                        padding={padding}
                                        id={name}
                                        onChange={(text) => {
                                            onChange(text.currentTarget.value);
                                        }}
                                        placeholder={placeholder}
                                        required={required}
                                        {...rest}
                                    />
                                )}
                            />
                        )}
                    </ContainerInput>
                ) : icon == 'textArea' ? (
                    <ContainerTextAreaInput borderColor={borderColor} padding={padding} borderRadius={borderRadius} isFocused={isFocused} isErrored={isErrored} backgroundColor={backgroundColor} height={height}>
                        {icon == 'textArea' && (
                            <RHFInput
                                as={
                                    <TextInputArea
                                        id={name}
                                        name={name}
                                        rows={5}
                                        cols={33}
                                        height={height}
                                        color={color}
                                        backgroundColor={backgroundColor}
                                        borderRadius={borderRadius}
                                        padding={padding}
                                        {...TextInputAttributes(handleInputFocus, handleInputBlur)}
                                        onChange={(text) => {
                                            setValue(name, text.currentTarget.value);
                                            //pega valor do input: getValues(name)
                                        }}

                                        placeholder={placeholder}
                                    />
                                }
                                register={() => Register.ref}
                                rules={{ required }}
                                name={name}
                                setValue={() => { }}
                                {...rest}
                            />
                        )}
                    </ContainerTextAreaInput>
                ) : (
                    <ContainerInput borderColor={borderColor} padding={padding} borderRadius={borderRadius} isFocused={isFocused} isErrored={isErrored} backgroundColor={backgroundColor} height={height}>
                        {icon == 'password' && (
                            <RHFInput
                                as={
                                    <TextInput
                                        {...TextInputAttributes(
                                            handleInputFocus,
                                            handleInputBlur,
                                            inputSecureTextEntry,
                                        )}
                                        backgroundColor={backgroundColor}
                                        type={inputSecureTextEntry ? typeInput : 'text'}
                                        height={height}
                                        color={color}
                                        borderRadius={borderRadius}
                                        padding={padding}
                                        id={name}
                                        placeholder={placeholder}
                                        onChange={(text) => {
                                            setValue(name, text.currentTarget.value);
                                        }}
                                    />
                                }
                                register={() => Register.ref}
                                rules={{ required }}
                                name={name}
                                setValue={() => { }}
                                {...rest}
                            />
                        )}
                        {
                            //redenrizacao de input do tipo phone
                        }

                        {icon == 'phone' && (
                            <InputMask
                                ref={() => Register.ref}
                                mask='(99) 9 9999-9999'
                                maskChar={null}
                                onChange={(text) => {
                                    setValue(name, text.currentTarget.value);
                                }}
                                {...TextInputAttributes(handleInputFocus, handleInputBlur)}
                                {...rest}
                            >
                                {(inputProps) => <TextInput
                                    color={color}
                                    padding={padding}
                                    backgroundColor={backgroundColor}
                                    height={height}
                                    type={typeInput}
                                    id={name}
                                    placeholder={placeholder}
                                    borderRadius={borderRadius}
                                    name={name}
                                    required={required}

                                />}
                            </InputMask>
                        )}

                        {icon == 'cep' && (
                            <InputMask
                                mask='99999-999'
                                maskChar={null}
                                onChange={(text) => {
                                    setValue(name, text.currentTarget.value);
                                    const textValue = text.currentTarget.value.substring(0, 9)
                                    if (getValues(name).length === 10) {
                                        setValue(name, textValue);
                                    }
                                }}
                                {...TextInputAttributes(handleInputFocus, handleInputBlur)}
                                {...rest}
                            >
                                {(inputProps) => <TextInput
                                    color={color}
                                    padding={padding}
                                    backgroundColor={backgroundColor}
                                    height={height}
                                    type={typeInput}
                                    id={name}
                                    placeholder={placeholder}
                                    borderRadius={borderRadius}
                                    name={name}
                                    required={required}
                                />}
                            </InputMask>
                        )}

                        {icon == 'money' && (
                            <IntlCurrencyInput
                                required={required}
                                className='money-input'
                                style={{
                                    backgroundColor,
                                    color,
                                    borderRadius,
                                    padding,
                                    fontWeight,
                                    borderColor,
                                    flex: 1,
                                    alignItems: 'center',
                                    fontSize: 16,
                                    fontFamily: fonts.regular,
                                    opacity: 1,
                                    width: '100%',
                                    height: height - 5,
                                    border: 0,
                                    flexShrink: 1,
                                }}
                                currency='BRL'
                                config={currencyConfig}
                                onChange={handleChange}
                            />
                        )}

                        {icon == 'password' && (
                            <div style={{ marginRight }}>
                                {
                                    inputSecureTextEntry ? <BsEyeSlashFill size={size} onClick={() => handleIconClick()} color={colorIcon} /> : <BsFillEyeFill size={size} onClick={() => handleIconClick()} color={colorIcon} />
                                }
                            </div>
                        )}

                        {icon == 'search' && (
                            <RHFInput
                                as={
                                    <TextInput
                                        {...TextInputAttributes(handleInputFocus, handleInputBlur)}
                                        type={typeInput}
                                        onChange={(text) => {
                                            setValue(name, text.currentTarget.value);
                                            //pega valor do input: getValues(name)
                                        }}
                                        color={color}
                                        height={height}
                                        padding={padding}
                                        borderRadius={borderRadius}
                                        id={name}
                                        placeholder={placeholder}
                                        backgroundColor={backgroundColor}
                                    />
                                }
                                register={() => Register.ref}
                                rules={{ required }}
                                name={name}
                                setValue={() => { }}
                                {...rest}
                            />
                        )}

                        {icon == 'search' && (
                            <div style={{ marginRight }}>
                                <BsSearch onClick={() => handleIconClick()} color={colorIcon} size={size} />
                            </div>
                        )}

                        {icon != 'password' &&
                            icon != 'phone' &&
                            icon != 'textArea' &&
                            icon != 'cep' &&
                            icon != 'money' && (
                                <RHFInput
                                    as={
                                        <TextInput
                                            {...TextInputAttributes(handleInputFocus, handleInputBlur)}
                                            type={typeInput}
                                            onChange={(text) => {
                                                setValue(name, text.currentTarget.value);
                                                //pega valor do input: getValues(name)
                                            }}
                                            color={color}
                                            height={height}
                                            borderRadius={borderRadius}
                                            padding={padding}
                                            placeholder={placeholder}
                                            backgroundColor={backgroundColor}
                                        />
                                    }
                                    register={() => Register.ref}
                                    rules={{ required }}
                                    name={name}
                                    setValue={() => { }}
                                    {...rest}
                                />
                            )}
                    </ContainerInput>
                )}
                <ErrorText>{inputError}</ErrorText>
            </Container>
        </>
    );
};

export default forwardRef(Input);
