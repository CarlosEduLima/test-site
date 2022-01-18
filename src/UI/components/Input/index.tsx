/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { RHFInput } from 'react-hook-form-input';
import { BsEyeSlashFill, BsFillEyeFill, BsSearch } from 'react-icons/bs';
import InputMask from 'react-input-mask';
import { TextInputMask } from 'react-masked-text';
import { createFilter } from 'react-search-input';
import colors from '../../../utils/colors';
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
  SearchInput,
  TextInput,
  TextInputArea,
} from './style';

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  {
    name,
    icon,
    label = '',
    required = true,
    control,
    inputError,
    type = 'other',
    typeInput = 'text',
    variant = 'squared',
    style = {
      backgroundColor: 'white',
      height: 32,
      color: 'black',
      size: 20,
      borderRadius: '60px',
      labelFontSize: 22,
      padding: '12px',
      colorLabel: 'black',
      colorIcon: colors.blue,
      marginRight: 10,
      borderColor: 'transparent',
      marginLeft: 18,
      rows: 10,
      cols: 33,
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '25px',
      placeholderTextColor: colors.labelInput,
      focusBorderColor: 'transparent',
    },
    placeholder,
    dataSearch = [],
    KEYS_TO_FILTERS = ['name'],
    ...rest
  },
  ref,
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isErrored, setIsErrored] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [inputSecureTextEntry, setInputSecureTextEntry] = useState(true);
  const [filterPreviewSearchValue, setFilterPreviewSearchValue] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [valueSearch, setValueSearch] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const { register, getValues, setFocus, setValue } = useForm();
  const Register = register(name);

  if (variant == 'squared') {
    style.backgroundColor = colors.lightBlue;
    style.height = 44;
    style.borderRadius = '8px';
    style.fontSize = '18px';
    style.focusBorderColor = colors.blue;
  }

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
    setIsDirty(true);
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
    isFocused: isFocused,
    isErrored: isErrored,
    borderColor: style.borderColor,
    padding: style.padding,
    borderRadius: style.borderRadius,
    backgroundColor: style.backgroundColor,
    height: style.height,
    $placeholderTextColor: style.placeholderTextColor,
    focusBorderColor: style.focusBorderColor,
  };

  const textInputProps = {
    color: style.color,
    padding: style.padding,
    backgroundColor: style.backgroundColor,
    height: style.height,
    borderRadius: style.borderRadius,
    fontSize: style.fontSize,
    type: typeInput,
    id: name,
    placeholder: placeholder,
    name: name,
    required: required,
    $placeholderTextColor: style.placeholderTextColor,
    fontWeight: style.fontWeight,
    $isDirty: isDirty,
    ref: Register.ref,
  };

  const passwordInput = (
    <ContainerInput {...containerInputProps}>
      <RHFInput
        as={
          <TextInput
            {...textInputProps}
            {...TextInputAttributes(handleInputFocus, handleInputBlur, inputSecureTextEntry)}
            onChange={(text) => {
              setValue(name, text.currentTarget.value);
            }}
            type={inputSecureTextEntry ? typeInput : 'text'}
          />
        }
        register={() => Register.ref}
        rules={{ required }}
        name={name}
        setValue={() => {}}
      />
      <div style={{ marginRight: style.marginRight }}>
        {inputSecureTextEntry ? (
          <BsEyeSlashFill
            size={style.size}
            onClick={() => handleIconClick()}
            color={style.colorIcon}
          />
        ) : (
          <BsFillEyeFill
            size={style.size}
            onClick={() => handleIconClick()}
            color={style.colorIcon}
          />
        )}
      </div>
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
        {...textInputProps}
        required={required}
        currency="BRL"
        config={currencyConfig()}
        onChange={handleChange}
      />
    </ContainerInput>
  );

  const searchInput = (
    <ContainerInput {...containerInputProps}>
      <SearchInput type="text" onChange={getNameSearch} value={valueSearch} {...textInputProps} />
      <div style={{ marginRight: style.marginRight, marginLeft: style.marginLeft }}>
        <BsSearch onClick={() => handleIconClick()} color={style.colorIcon} size={style.size} />
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
            }}
            {...textInputProps}
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
            $placeholderTextColor={style.placeholderTextColor}
            fontWeight={style.fontWeight}
            id={name}
            name={name}
            rows={style.rows}
            cols={style.cols}
            height={style.height}
            color={style.color}
            backgroundColor={style.backgroundColor}
            borderRadius={style.borderRadius}
            fontSize={style.fontSize}
            padding={style.padding}
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
            {...textInputProps}
            {...TextInputAttributes(handleInputFocus, handleInputBlur)}
            onChange={(text) => {
              onChange(text.currentTarget.value);
            }}
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
        render={({ field: { onChange, value } }) => (
          <TextInputMask
            {...textInputProps}
            style={{ width: '100%', fontSize: style.fontSize }}
            options={{
              mask: '99/99',
            }}
            value={value}
            onChange={(text) => {
              onChange(text.currentTarget.value);
            }}
          />
        )}
      />
    </ContainerInput>
  );
  return (
    <>
      <Container color={style.color} placeholderTextColor={style.placeholderTextColor}>
        <Label
          colorLabel={style.colorLabel}
          fontWeight={style.fontWeight}
          labelFontSize={style.labelFontSize}
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
