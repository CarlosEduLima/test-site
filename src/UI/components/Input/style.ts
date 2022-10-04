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

  ::placeholder {
    color: ${(props) => props.$placeholderTextColor || 'black'};
    opacity: 1;
  }
  .money-input:-moz-placeholder {
    color: ${(props) => props.$placeholderTextColor};
    opacity: 1;
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
  border-radius: ${(props) => props.$borderRadius || '9px'};
  background-color: white;
  align-content: center;
  border: 1px solid;
  padding: ${(props) => props.padding || '10px'};
  border-color: ${(props) =>
    props.isErrored ? colors.redError : props.borderColor || 'transparent'};

  &:focus-within {
    border: 0 solid;
    border-bottom: ${(props) => (props.isSearch ? '0' : '2px solid')};
    border-color: ${(props) =>
      props.isErrored ? colors.redError : props.focusBorderColor || 'transparent'};
  }

  &:focus {
    border: 0 solid;
    border-bottom: ${(props) => (props.isSearch ? '0' : '2px solid')};
    border-color: ${(props) =>
      props.isErrored ? colors.redError : props.focusBorderColor || 'transparent'};
  }
`;

export const ContainerTextAreaInput = styled(ContainerInput)``;

const commonTextProperties = css<InputPropsStyle>`
  flex: 1;
  align-items: center;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-family: ${fonts.regular};
  font-weight: ${(props) => props.fontWeight};
  opacity: 1;
  width: 100%;
  height: ${(props) => props.height - 5}px;
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.$backgroundColor || 'transparent'};

  ::placeholder {
    color: ${(props) => props.$placeholderTextColor || 'black'};
    opacity: 1;
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
  width: calc(100%);
  background-color: white;
  position: relative;
  margin-top: -20px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 0 0 9px 9px;
  padding-bottom: 16px;
  transition: all 0.7s;

  ::before {
    content: '';
    display: block;
    margin: 0 auto;
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    width: 92%;
  }
`;

export const ContainerSearchPreviewItem = styled.li`
  display: grid;
  justify-items: start;
  justify-content: start;
  width: 100%;
  min-width: 100%;
  margin-top: 8px;
  padding: 5px 27px;
  cursor: pointer;

  font-family: ${fonts.regular};
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);

  :hover {
    background-color: #0001;
  }
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
  ${commonTextProperties}
  color: ${(props) => (props.$isDirty ? props.color : props.$placeholderTextColor)};
`;

export const SearchInput = styled(ReactSearchInput)`
  display: flex;
  width: 100%;
  input {
    ${commonTextProperties}
    width: 100%;
    background-color: white;
    box-shadow: none !important;
    border: 0 !important;
  }
`;
