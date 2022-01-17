/* eslint-disable @typescript-eslint/no-unsafe-return */
import IntlCurrencyInput from 'react-intl-currency-input';
import ReactSearchInput from 'react-search-input';
import styled, { css } from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import {
  ContainerPlaceholderProps,
  ContainerProps,
  InputPropsLabel,
  InputPropsStyle,
} from './interfaces';

export const Container = styled.div<ContainerPlaceholderProps>`
  display: grid;
  min-width: 100%;
  max-width: 100%;
  ::-webkit-input-placeholder {
    color: ${(props) => props.color};
  }
  .money-input:-moz-placeholder {
    color: $ ${(props) => props.color};
  }
`;

export const Label = styled.label<InputPropsLabel>`
  font-family: ${fonts.bold};
  font-size: ${(props) => props.labelFontSize}px;
  margin-bottom: 11px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.colorLabel};
`;

export const ContainerInput = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height}px;
  padding: 0 5px;
  border-radius: ${(props) => props.borderRadius || '10px'};
  background-color: ${(props) => props.backgroundColor || 'white'};

  align-content: center;
  border: 1px solid;
  border-color: ${(props) => props.borderColor || 'transparent'};
  ${(props) =>
    props.isFocused &&
    css`
      border: 1px solid #666666;
    `}
  &:focus-within {
    border: 2px solid;
    border-bottom: ${(props) => {
      if (props.isSearch) {
        return '0px';
      }
      return '2px solid';
    }};
    border-color: ${(props) => props.borderColor || 'transparent'};
    ${(props) =>
      props.isErrored &&
      css`
        border-color: #c53030;
      `}
  }
  &:focus {
    border: 2px solid;
    border-bottom: ${(props) => {
      if (props.isSearch) {
        return '0px';
      }
      return '2px solid';
    }};
    border-color: ${(props) => props.borderColor || 'transparent'};
    ${(props) =>
      props.isErrored &&
      css`
        border: 5px solid red;
        border-color: #c53030;
      `}
  }
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  padding: ${(props) => props.padding || '10px'};
`;

export const ContainerTextAreaInput = styled(ContainerInput)``;

const commonTextProperties = css<InputPropsStyle>`
  flex: 1;
  align-items: center;
  color: ${colors.input};
  font-size: 16px;
  font-family: ${fonts.regular};
  opacity: 1;
  width: 100%;
  height: ${(props) => props.height - 5}px;
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};
  ::-webkit-input-placeholder {
    color: ${(props) => props.color || 'black'};
  }
  &:-moz-placeholder {
    color: ${(props) => props.color || 'black'};
  }
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  flex-shrink: 1;
  padding-right: ${(props) => props.padding || '10px'};
  padding-left: ${(props) => props.padding || '10px'};
  box-shadow: 0 0 0 0 !important;
  border: 0 !important;
`;

export const TextInput = styled.input<InputPropsStyle>`
  ${commonTextProperties}
`;

export const TextInputArea = styled.textarea<InputPropsStyle>`
  ${commonTextProperties}
  padding-top: 0;
  resize: none;
`;

export const ContainerSearchPreview = styled.div`
  display: block;
  width: 100%;
  z-index: 0;
`;

export const ContainerSearchPreviewItems = styled.ul`
  width: calc(100% - 16px);
  background-color: white;
  position: relative;

  margin-top: -20px;
  margin-left: 0px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: 1px solid purple;
  border-top: 0px;
  padding-bottom: 16px;
  transition: all 0.7s;
`;

export const ContainerSearchPreviewItem = styled.li`
  display: grid;
  justify-items: start;
  justify-content: start;
  width: 100%;
  min-width: 100%;
  margin-left: -7%;
  margin-top: 8px;
  cursor: pointer;
`;

export const ErrorText = styled.p`
  color: ${colors.red};
  padding-left: 10px;
  font-family: ${fonts.regular};
  margin-bottom: 10px;
  margin-top: 8px;
  font-size: 16px;
`;

export const CurrencyInput = styled(IntlCurrencyInput)`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};
  padding: ${(props) => props.padding};
  border-color: ${(props) => props.borderColor};
  flex: 1;
  align-items: center;
  font-family: ${fonts.regular};
  font-weight: ${(props) => props.fontWeight};
  opacity: 1;
  width: 100%;
  height: ${(props) => props.height - 5}px;
  border: 0;
  font-size: ${(props) => props.fontSize};
`;

export const SearchInput = styled(ReactSearchInput)`
  flex: 1;
  flex-shrink: 1;
  align-items: center;
  font-size: ${(props) => props.fontSize};
  font-family: ${fonts.regular};
  opacity: 1;
  width: 100%;
  height: ${(props) => props.height - 5}px;
  border-radius: ${(props) => props.borderRadius || '10px'};
  border: none;
  color: ${(props) => props.color || 'black'};
  background-color: transparent;
  padding: 0;
  ::-webkit-input-placeholder: {
    color: ${(props) => props.color || 'black'};
  }
  &:-moz-placeholder: {
    color: ${(props) => props.color || 'black'};
  }
  &:focus: {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  input {
    width: 100%;
    box-shadow: none !important;
    border: 0 !important;
  }
`;
