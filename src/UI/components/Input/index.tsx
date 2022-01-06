import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { RHFInput } from 'react-hook-form-input';
import { BsEyeSlashFill, BsFillEyeFill, BsSearch } from 'react-icons/bs';
import InputMask from 'react-input-mask';
import IntlCurrencyInput from 'react-intl-currency-input';
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
  ErrorText,
  Label,
  TextInput,
  TextInputArea,
} from './style';

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = ({
  name,
  icon,
  label,
  required,
  control = () => {},
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
  dataSearch = [{ id: 1, name: 'Desenvolvimento de sites' }],
  filterPreviewSearch = (datas: any[], data: string) => {
    const dataFilter = datas.filter((value) => {
      return value.name == data;
    });
    return dataFilter;
  },
  KEYS_TO_FILTERS = ['name'],
  marginLeft = 18,
  rows = 10,
  cols = 33,
  fontSize = '16px',
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const [isErrored, setIsErrored] = useState(false);
  const [inputSecureTextEntry, setInputSecureTextEntry] = useState(true);
  const [filterPreviewSearchValue, setFilterPreviewSearchValue] = useState('');
  const [filtered, setFiltered] = useState([]);
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

  const handleChange = (event, value) => {
    event.preventDefault();
    setValue(name, value);
  };

  const getNameSearch = (value: string) => {
    console.log(value);
    setValue(name, value);
    setFilterPreviewSearchValue(value);
  };

  useEffect(() => {
    setFiltered(dataSearch.filter(createFilter(filterPreviewSearchValue, KEYS_TO_FILTERS)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterPreviewSearchValue]);

  useEffect(() => {
    if (inputError) {
      setIsErrored(true);
    } else {
      setIsErrored(false);
    }
  }, [inputError]);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
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
                    textarea:focus, input:focus {
                        box-shadow: 0 0 0 0;
                        outline: 0;
                    }
                        `,
          ].join('\n'),
        }}></style>
      <Container>
        <Label
          colorLabel={colorLabel}
          fontWeight={fontWeight}
          labelFontSize={labelFontSize}
          for={name}>
          {label}
        </Label>
        {type !== 'other' ? (
          <ContainerInput
            isSearch={filtered.length == 0 ? false : true}
            borderColor={borderColor}
            padding={padding}
            borderRadius={borderRadius}
            isFocused={isFocused}
            isErrored={isErrored}
            backgroundColor={backgroundColor}
            height={height}>
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
                    fontSize={fontSize}
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
                render={({ field: { onChange, value, name } }) => (
                  <TextInputMask
                    style={{ width: '100%', fontSize }}
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
          <ContainerTextAreaInput
            isSearch={filtered.length == 0 ? false : true}
            borderColor={borderColor}
            padding={padding}
            borderRadius={borderRadius}
            isFocused={isFocused}
            isErrored={isErrored}
            backgroundColor={backgroundColor}
            height={height}>
            {icon == 'textArea' && (
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
            )}
          </ContainerTextAreaInput>
        ) : (
          <ContainerInput
            isSearch={filtered.length == 0 ? false : true}
            borderColor={borderColor}
            padding={padding}
            borderRadius={borderRadius}
            isFocused={isFocused}
            isErrored={isErrored}
            backgroundColor={backgroundColor}
            height={height}>
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
                    fontSize={fontSize}
                    placeholder={placeholder}
                    onChange={(text) => {
                      setValue(name, text.currentTarget.value);
                    }}
                  />
                }
                register={() => Register.ref}
                rules={{ required }}
                name={name}
                setValue={() => {}}
                {...rest}
              />
            )}

            {icon == 'phone' && (
              <InputMask
                ref={() => Register.ref}
                mask="(99) 9 9999-9999"
                maskChar={null}
                onChange={(text) => {
                  setValue(name, text);
                }}
                {...TextInputAttributes(handleInputFocus, handleInputBlur)}
                {...rest}>
                {() => (
                  <TextInput
                    color={color}
                    padding={padding}
                    backgroundColor={backgroundColor}
                    height={height}
                    type={typeInput}
                    id={name}
                    fontSize={fontSize}
                    placeholder={placeholder}
                    borderRadius={borderRadius}
                    name={name}
                    required={required}
                  />
                )}
              </InputMask>
            )}

            {icon == 'cep' && (
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
                {() => (
                  <TextInput
                    color={color}
                    padding={padding}
                    backgroundColor={backgroundColor}
                    height={height}
                    type={typeInput}
                    id={name}
                    fontSize={fontSize}
                    placeholder={placeholder}
                    borderRadius={borderRadius}
                    name={name}
                    required={required}
                  />
                )}
              </InputMask>
            )}

            {icon == 'money' && (
              <IntlCurrencyInput
                required={required}
                className="money-input"
                style={{
                  backgroundColor,
                  color,
                  borderRadius,
                  padding,
                  fontWeight,
                  borderColor,
                  flex: 1,
                  alignItems: 'center',
                  fontFamily: fonts.regular,
                  opacity: 1,
                  width: '100%',
                  height: height - 5,
                  border: 0,
                  flexShrink: 1,
                  fontSize,
                }}
                currency="BRL"
                config={currencyConfig()}
                onChange={handleChange}
              />
            )}

            {icon == 'password' && (
              <div style={{ marginRight }}>
                {inputSecureTextEntry ? (
                  <BsEyeSlashFill size={size} onClick={() => handleIconClick()} color={colorIcon} />
                ) : (
                  <BsFillEyeFill size={size} onClick={() => handleIconClick()} color={colorIcon} />
                )}
              </div>
            )}

            {icon == 'search' && (
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
                className=""
                type="text"
                onChange={getNameSearch}
              />
            )}

            {icon == 'search' && (
              <>
                <div style={{ marginRight, marginLeft }}>
                  <BsSearch onClick={() => handleIconClick()} color={colorIcon} size={size} />
                </div>
              </>
            )}

            {icon != 'password' &&
              icon != 'phone' &&
              icon != 'textArea' &&
              icon != 'cep' &&
              icon != 'money' &&
              icon != 'search' && (
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
              )}
          </ContainerInput>
        )}
        <ErrorText>{inputError}</ErrorText>
      </Container>
      {icon == 'search' && filterPreviewSearchValue.length != 0 && filtered.length != 0 && (
        <ContainerSearchPreview>
          <ContainerSearchPreviewItems key={filtered.length}>
            {filtered.map((value, index) => {
              return (
                <ContainerSearchPreviewItem key={index} onClick={() => {}}>
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
