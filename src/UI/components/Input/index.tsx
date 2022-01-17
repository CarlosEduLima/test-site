/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { RHFInput } from 'react-hook-form-input';
import { BsEyeSlashFill, BsFillEyeFill, BsSearch } from 'react-icons/bs';
import InputMask from 'react-input-mask';
import { TextInputMask } from 'react-masked-text';
import SearchInput, { createFilter } from 'react-search-input';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import { currencyConfig } from '../../../utils/input';
import { TextInputAttributes } from './attributes';
import { InputProps, InputRef } from './interfaces';
import {
  Container,
  ContainerInput,
  ContainerSearchPreview,
  ContainerSearchPreviewItem,
  ContainerSearchPreviewItems,
  ContainerTextAreaInput,
  CurrencyInput,
  ErrorText,
  Label,
  TextInput,
  TextInputArea,
} from './style';

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({
  name,
  icon,
  label = '',
  required = true,
  control,
  inputError,
  type = 'other',
  typeInput = 'text',
  backgroundColor = 'white',
  height = 32,
  color = 'black',
  size = 20,
  borderRadius = '60px',
  labelFontSize = 22,
  padding = '12px',
  fontWeight = '500',
  colorLabel = 'black',
  colorIcon = colors.labelInput,
  marginRight = 10,
  borderColor = 'transparent',
  placeholder,
  dataSearch = [],
  KEYS_TO_FILTERS = ['name'],
  marginLeft = 18,
  rows = 10,
  cols = 33,
  fontSize = '16px',
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const [isErrored, setIsErrored] = useState(false);
  const [inputSecureTextEntry, setInputSecureTextEntry] = useState(true);
  const [filterPreviewSearchValue, setFilterPreviewSearchValue] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [valueSearch, setValueSearch] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const { register, getValues, setFocus, setValue } = useForm();

  const Register = register(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
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

  const handleChange = (event, value) => {
    event.preventDefault();
    setValue(name, value);
  };

  const getNameSearch = (value: string) => {
    setValueSearch(value);
    if (valueSearch != value) {
      setIsSearch(true);
    }
    setValue(name, value);
    setFilterPreviewSearchValue(value);
  };
  useEffect(() => {
    setFiltered(dataSearch.filter(createFilter(filterPreviewSearchValue, KEYS_TO_FILTERS)));
  }, [filterPreviewSearchValue]);

  useEffect(() => {
    if (inputError && inputError != '') {
      setIsErrored(true);
    } else {
      setIsErrored(false);
    }
  }, [inputError]);

  const containerInputProps = {
    isSearch: filtered.length == 0 ? false : true,
    borderColor: borderColor,
    padding: padding,
    borderRadius: borderRadius,
    isFocused: isFocused,
    isErrored: isErrored,
    backgroundColor: backgroundColor,
    height: height,
  };

  const textInputProps = {
    color: color,
    padding: padding,
    backgroundColor: backgroundColor,
    height: height,
    type: typeInput,
    id: name,
    fontSize: fontSize,
    placeholder: placeholder,
    borderRadius: borderRadius,
    name: name,
    // required: required,
    ref: Register.ref,
  };

  const passwordInput = (
    <ContainerInput {...containerInputProps}>
      <RHFInput
        as={
          <TextInput
            {...TextInputAttributes(handleInputFocus, handleInputBlur, inputSecureTextEntry)}
            onChange={(text) => {
              setValue(name, text.currentTarget.value);
            }}
            {...textInputProps}
            type={inputSecureTextEntry ? typeInput : 'text'}
          />
        }
        register={() => Register.ref}
        rules={{ required }}
        name={name}
        setValue={() => {}}
      />
    </ContainerInput>
  );

  const phoneInput = (
    <ContainerInput {...containerInputProps}>
      <InputMask
        ref={() => Register.ref}
        mask="(99) 9 9999-9999"
        maskChar={null}
        onChange={(text) => {
          setValue(name, text);
        }}
        {...TextInputAttributes(handleInputFocus, handleInputBlur)}>
        {() => <TextInput {...textInputProps} />}
      </InputMask>
      <div style={{ marginRight }}>
        {inputSecureTextEntry ? (
          <BsEyeSlashFill size={size} onClick={() => handleIconClick()} color={colorIcon} />
        ) : (
          <BsFillEyeFill size={size} onClick={() => handleIconClick()} color={colorIcon} />
        )}
      </div>
    </ContainerInput>
  );

  const cepInput = (
    <ContainerInput {...containerInputProps}>
      <InputMask
        mask="99999-999"
        maskChar={null}
        onChange={(text) => {
          setValue(name, text);
          const textValue = text.substring(0, 9);
          if (getValues(name).length === 10) {
            setValue(name, textValue);
          }
        }}
        {...TextInputAttributes(handleInputFocus, handleInputBlur)}
        {...rest}>
        {() => <TextInput {...textInputProps} />}
      </InputMask>
    </ContainerInput>
  );
  const moneyInput = (
    <ContainerInput {...containerInputProps}>
      <CurrencyInput
        required={required}
        currency="BRL"
        config={currencyConfig()}
        onChange={handleChange}
        {...textInputProps}
      />
    </ContainerInput>
  );

  const searchInput = (
    <ContainerInput {...containerInputProps}>
      <SearchInput
        style={{
          flex: 1,
          alignItems: 'center',
          fontSize,
          fontFamily: fonts.regular,
          opacity: 1,
          width: '100%',
          height: `${height - 5}px`,
          borderRadius: borderRadius || '10px',
          border: '0px',
          color: color || 'black',
          backgroundColor: backgroundColor || 'white',
          flexShrink: 1,
          padding: padding || '10px',
          '::-webkit-input-placeholder': {
            color: color || 'black',
          },
          '&:-moz-placeholder': {
            color: color || 'black',
          },
          '&:focus': {
            boxShadow: '0 0 0 0',
            outline: 0,
          },
        }}
        type="text"
        onChange={getNameSearch}
        value={valueSearch}
        ref={Register.ref}
      />
      <div style={{ marginRight, marginLeft }}>
        <BsSearch onClick={() => handleIconClick()} color={colorIcon} size={size} />
      </div>
    </ContainerInput>
  );

  const otherInput = (
    <ContainerInput {...containerInputProps}>
      <RHFInput
        as={
          <TextInput
            {...TextInputAttributes(handleInputFocus, handleInputBlur)}
            type={typeInput}
            onChange={(text) => {
              setValue(name, text);
              //pega valor do input: getValues(name)
            }}
            color={color}
            height={height}
            borderRadius={borderRadius}
            padding={padding}
            placeholder={placeholder}
            fontSize={fontSize}
            backgroundColor={backgroundColor}
          />
        }
        register={() => Register.ref}
        rules={{ required }}
        name={name}
        setValue={() => {}}
        {...rest}
      />
    </ContainerInput>
  );
  const textAreaInput = (
    <ContainerTextAreaInput {...containerInputProps}>
      <RHFInput
        as={
          <TextInputArea
            id={name}
            name={name}
            rows={rows}
            cols={cols}
            height={height}
            color={color}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            fontSize={fontSize}
            padding={padding}
            {...TextInputAttributes(handleInputFocus, handleInputBlur)}
            onChange={(text) => {
              setValue(name, text.currentTarget.value);
            }}
            placeholder={placeholder}
          />
        }
        register={() => Register.ref}
        rules={{ required }}
        name={name}
        setValue={() => {}}
        {...rest}
      />
    </ContainerTextAreaInput>
  );
  const typeTextInput = (
    <ContainerInput {...containerInputProps}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <TextInput
            {...TextInputAttributes(handleInputFocus, handleInputBlur)}
            onChange={(text) => {
              onChange(text.currentTarget.value);
            }}
            {...textInputProps}
          />
        )}
      />
    </ContainerInput>
  );
  const typeRandomInput = (
    <ContainerInput {...containerInputProps}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, name } }) => (
          <TextInputMask
            style={{ width: '100%', fontSize }}
            options={{
              mask: '99/99',
            }}
            value={value}
            onChange={(text) => {
              onChange(text.currentTarget.value);
            }}
            {...textInputProps}
          />
        )}
      />
    </ContainerInput>
  );
  return (
    <>
      <Container color={color}>
        <Label
          colorLabel={colorLabel}
          fontWeight={fontWeight}
          labelFontSize={labelFontSize}
          htmlFor={name}>
          {label}
        </Label>

        {type == 'text'
          ? typeTextInput
          : type != 'other'
          ? typeRandomInput
          : icon == 'password'
          ? passwordInput
          : icon == 'textArea'
          ? textAreaInput
          : icon == 'phone'
          ? phoneInput
          : icon == 'cep'
          ? cepInput
          : icon == 'money'
          ? moneyInput
          : icon == 'search'
          ? searchInput
          : otherInput}

        <ErrorText>{inputError}</ErrorText>
      </Container>
      {icon == 'search' &&
        filterPreviewSearchValue.length != 0 &&
        filtered.length != 0 &&
        isSearch && (
          <ContainerSearchPreview>
            <ContainerSearchPreviewItems key={filtered.length}>
              {filtered.map((value, index) => {
                return (
                  <ContainerSearchPreviewItem
                    key={index}
                    onClick={() => {
                      setIsSearch(false);
                      return setValueSearch(value.name);
                    }}>
                    {value.name}
                  </ContainerSearchPreviewItem>
                );
              })}
            </ContainerSearchPreviewItems>
          </ContainerSearchPreview>
        )}
    </>
  );
};

export default forwardRef(Input);
