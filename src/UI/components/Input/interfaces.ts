export interface InputProps {
  name: string;
  icon?: string;
  label: string;
  secureTextEntry?: boolean;
  required?: boolean;
  inputError: string;
  control?: never;
  type?: string;
  typeInput: string;
  backgroundColor?: string;
  height?: number;
  color?: string;
  size?: number;
  borderRadius?: string;
  labelFontSize?: number;
  padding?: string;
  fontWeight?: string;
  colorLabel?: string;
  colorIcon?: string;
  marginRight?: number;
  borderColor?: string;
  placeholder: string;
  dataSearch?: unknown[];
  filterPreviewSearch?: (datas: unknown[], data: string) => unknown[];
  KEYS_TO_FILTERS?: string[];
  marginLeft?: number;
  rows?: number;
  cols?: number;
  fontSize?: string;
}

export interface InputPropsStyle {
  backgroundColor: string;
  height: number;
  color: string;
  borderRadius: string;
  padding: string;
  fontSize: string;
}

export interface InputPropsLabel {
  labelFontSize: number;
  for: string;
  fontWeight: string;
  colorLabel: string;
}

export interface InputValueReference {
  value: string;
}

export interface InputRef {
  focus(): void;
}

export interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
  backgroundColor: string;
  height: number;
  borderRadius: string;
  padding: string;
  borderColor: string;
  isSearch?: boolean;
}

export interface IconProps {
  isFilled: boolean;
}
