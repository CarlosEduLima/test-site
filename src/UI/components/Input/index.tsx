/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { RHFInput } from 'react-hook-form-input';
import { BsEyeSlashFill, BsFillEyeFill, BsSearch } from 'react-icons/bs';
import { TextInputMask } from 'react-masked-text';
import { createFilter } from 'react-search-input';
import { currencyConfig } from '../../../utils/input';
import { TextInputAttributes } from './attributes';
import { InputProps, InputRef } from './interfaces';
import InputMask from 'react-input-mask';
import colors from '../../../utils/colors';
import * as S from './style';

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
      color: '#000000b5',
      size: 20,
      borderRadius: '60px',
      labelFontSize: 22,
      padding: '12px',
      colorLabel: 'black',
      colorIcon: colors.blue,
      marginRight: 10,
      borderColor: 'transparent',
      rows: 10,
      cols: 33,
      fontSize: '16px',
      fontWeight: '600',
      lineHeight: '25px',
      placeholderTextColor: colors.black,
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
    setIsClicked(false);
    if (value.trim().length) {
      setValueSearch(value);
      if (valueSearch != value) {
        setIsSearch(true);
      }
      setValue(name, value);
      if (!isClicked) {
        setFiltered(dataSearch.filter(createFilter(value)));
      }
      setFilterPreviewSearchValue(value);
    } else {
      setFiltered([]);
    }
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleSelected = (value) => {
    setIsSearch(false);
    setFiltered([]);
    setIsClicked(true);
    return setValueSearch(value.name);
  };

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
    $borderRadius: style.borderRadius,
    $backgroundColor: style.backgroundColor,
    height: style.height,
    $placeholderTextColor: style.placeholderTextColor,
    focusBorderColor: style.focusBorderColor,
  };

  const textInputProps = {
    color: style.color,
    padding: style.padding,
    $backgroundColor: style.backgroundColor,
    height: style.height,
    $borderRadius: style.borderRadius,
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
    <S.ContainerInput {...containerInputProps}>
      <RHFInput
        as={
          <S.TextInput
            {...textInputProps}
            {...TextInputAttributes(handleInputFocus, handleInputBlur, inputSecureTextEntry)}
            onChange={(text) => {
              console.log(text);
              console.log(text.currentTarget.value);
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
    </S.ContainerInput>
  );

  const phoneInput = (
    <S.ContainerInput {...containerInputProps}>
      <InputMask
        ref={() => Register.ref}
        mask="(99) 9 9999-9999"
        maskChar={null}
        onChange={(text) => {
          setValue(name, text);
        }}
        {...TextInputAttributes(handleInputFocus, handleInputBlur)}>
        {() => <S.TextInput {...textInputProps} />}
      </InputMask>
    </S.ContainerInput>
  );

  const cepInput = (
    <S.ContainerInput {...containerInputProps}>
      <InputMask
        mask="99999-999"
        maskChar={null}
        onChange={(text) => {
          setValue(name, text);
          const textValue = text.target.value.substring(0, 9);
          if (getValues(name).length === 10) {
            setValue(name, textValue);
          }
        }}
        {...TextInputAttributes(handleInputFocus, handleInputBlur)}
        {...rest}>
        {() => <S.TextInput {...textInputProps} />}
      </InputMask>
    </S.ContainerInput>
  );
  const moneyInput = (
    <S.ContainerInput {...containerInputProps}>
      <S.CurrencyInput
        {...textInputProps}
        required={required}
        currency="BRL"
        config={currencyConfig()}
        onChange={handleChange}
      />
    </S.ContainerInput>
  );

  const searchInput = (
    <S.ContainerInput
      {...containerInputProps}
      $borderRadius={
        filtered.length > 0 && valueSearch.length > 0 ? '9px 9px 0 0' : '9px 9px 9px 9px'
      }>
      <S.SearchInput
        autocomplete="off"
        type="text"
        onChange={getNameSearch}
        value={valueSearch}
        {...textInputProps}
      />
      <div style={{ marginRight: style.marginRight, marginLeft: style.marginLeft }}>
        <BsSearch onClick={() => handleIconClick()} color={style.colorIcon} size={style.size} />
      </div>
    </S.ContainerInput>
  );

  const otherInput = (
    <S.ContainerInput {...containerInputProps}>
      <RHFInput
        as={
          <S.TextInput
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
    </S.ContainerInput>
  );
  const textAreaInput = (
    <S.ContainerTextAreaInput {...containerInputProps}>
      <RHFInput
        as={
          <S.TextInputArea
            $placeholderTextColor={style.placeholderTextColor}
            fontWeight={style.fontWeight}
            id={name}
            name={name}
            rows={style.rows}
            cols={style.cols}
            height={style.height}
            color={style.color}
            $backgroundColor={style.backgroundColor}
            $borderRadius={style.borderRadius}
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
    </S.ContainerTextAreaInput>
  );
  const typeTextInput = (
    <S.ContainerInput {...containerInputProps}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange } }) => (
          <S.TextInput
            {...textInputProps}
            {...TextInputAttributes(handleInputFocus, handleInputBlur)}
            onChange={(text) => {
              onChange(text.currentTarget.value);
            }}
          />
        )}
      />
    </S.ContainerInput>
  );
  const typeRandomInput = (
    <S.ContainerInput {...containerInputProps}>
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
    </S.ContainerInput>
  );
  return (
    <>
      <S.Container color={style.color} $placeholderTextColor={style.placeholderTextColor}>
        <S.Label
          colorLabel={style.colorLabel}
          fontWeight={style.fontWeight}
          labelFontSize={style.labelFontSize}
          htmlFor={name}>
          {label}
        </S.Label>

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

        <S.ErrorText>{inputError}</S.ErrorText>
        {icon == 'search' &&
          filterPreviewSearchValue.length != 0 &&
          filtered.length != 0 &&
          isSearch && (
            <S.ContainerSearchPreview>
              <S.ContainerSearchPreviewItems key={filtered.length}>
                {filtered?.slice(0, 4)?.map((value, index) => {
                  return (
                    <S.ContainerSearchPreviewItem key={index} onClick={() => handleSelected(value)}>
                      {value}
                    </S.ContainerSearchPreviewItem>
                  );
                })}
              </S.ContainerSearchPreviewItems>
            </S.ContainerSearchPreview>
          )}
      </S.Container>
    </>
  );
};

export default forwardRef(Input);
