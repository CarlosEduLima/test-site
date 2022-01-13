import styled, { css } from 'styled-components';
import colors from '../../../utils/colors';
import fonts from '../../../utils/fonts';
import {
  ContainerProps,
  InputPropsLabel,
  InputPropsStyle,
  ContainerPlaceholderProps,
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
  align-items: center;
  width: 100%;
  height: ${(props) => props.height}px;
  padding: 0 5px;
  border-radius: ${(props) => props.borderRadius || '10px'};
  background-color: ${(props) => props.backgroundColor || 'white'};

  align-content: center;
  border: 1px solid;
  border-color: ${(props) => props.borderColor || '#666666'};
  ${(props) =>
    props.isFocused &&
    css`
      border-color: #666666;
    `}
  &:focus-within {
    border: 2px solid;
    border-bottom: ${(props) => {
      if (props.isSearch) {
        return '0px';
      }
      return '2px solid';
    }};
    border-color: ${(props) => props.borderColor || '#666666'};
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
    border-color: ${(props) => props.borderColor || '#666666'};
    ${(props) =>
      props.isErrored &&
      css`
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

export const ContainerSearchPreview = styled.div`
  display: block;
  width: 100%;
  z-index: 0;
`;

export const ContainerTextAreaInput = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${(props) => {
    const value = props.height - 5;
    return value;
  }}px;
  padding: 0 4px;
  border-radius: ${(props) => props.borderRadius || '10px'};
  margin-bottom: 10px;
  background-color: ${(props) => props.backgroundColor || 'white'};

  align-items: center;
  border: 1px solid;
  border-color: black;
  ${(props) =>
    props.isFocused &&
    css`
      border: 1px solid;
      border-color: #666666;
    `}
  &:focus-within {
    border: 2px solid;
    border-bottom: ${(props) => {
      if (props.isSearch) {
        return '0px';
      }
      return '2px solid';
    }};
    border-color: ${(props) => props.borderColor || '#666666'};
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
    border-color: ${(props) => props.borderColor || '#666666'};
    ${(props) =>
      props.isErrored &&
      css`
        border-color: #c53030;
      `}
  }
  ${(props) =>
    props.isErrored &&
    css`
      border: 1px solid ${colors.red};
    `}

  padding: ${(props) => props.padding || '10px'};
`;

export const TextInput = styled.input<InputPropsStyle>`
  flex: 1;
  align-items: center;
  color: ${colors.input};
  font-size: 16px;
  font-family: ${fonts.regular};
  opacity: 1;
  width: 100%;
  height: ${(props) => {
    const value = props.height - 5;
    return value;
  }}px;
  border-radius: ${(props) => props.borderRadius || '10px'};
  border: 0px;
  color: ${(props) => props.color || 'black'};
  background-color: ${(props) => props.backgroundColor || 'white'};
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
  padding: ${(props) => props.padding || '10px'};
`;

export const TextInputArea = styled.textarea<InputPropsStyle>`
  color: ${colors.input};
  font-size: 16px;
  font-family: ${fonts.regular};
  opacity: 1;
  width: 100%;
  align-items: center;
  height: ${(props) => {
    const value = props.height - 5;
    return value;
  }}px;
  ::-webkit-input-placeholder {
    color: ${(props) => props.color || 'black'};
  }
  &:-moz-placeholder {
    color: ${(props) => props.color || 'black'};
  }
  border-radius: ${(props) => props.borderRadius || '10px'};
  border: 0px;
  background-color: ${(props) => props.backgroundColor || 'white'};
  color: ${(props) => props.color || 'black'};
  &:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  flex-shrink: 1;
  resize: none;
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
