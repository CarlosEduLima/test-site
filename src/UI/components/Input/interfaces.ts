export interface InputProps {
  name: string;
  icon:
    | 'textArea'
    | 'password'
    | 'phone'
    | 'cep'
    | 'money'
    | 'search'
    | 'email'
    | 'other'
    | 'text'
    | string;
  label?: string;
  variant?: 'rounded' | 'squared';
  secureTextEntry?: boolean;
  required?: boolean;
  inputError?: string;
  control?: never;
  type?: 'text' | 'other' | string;
  typeInput?: 'color' | 'date' | 'email' | 'text' | 'number' | 'password' | string;
  placeholder: string;
  style?: {
    backgroundColor?: string;
    height?: number;
    color?: string;
    size?: number;
    borderRadius?: string;
    labelFontSize?: number;
    padding?: string;
    colorLabel?: string;
    colorIcon?: string;
    marginRight?: number;
    borderColor?: string;
    marginLeft?: number;
    rows?: number;
    cols?: number;
    fontSize?: string;
    fontWeight?: string;
    lineHeight: string;
    placeholderTextColor: string;
    focusBorderColor: string;
  };
  dataSearch?: unknown[];
  filterPreviewSearch?: (datas: unknown[], data: string) => unknown[];
  KEYS_TO_FILTERS?: string[];
}

export interface InputPropsStyle {
  backgroundColor: string;
  height: number;
  color: string;
  $borderRadius: string;
  padding: string;
  fontSize: string;
  fontWeight: string;
  $placeholderTextColor: string;
}

export interface InputPropsLabel {
  labelFontSize: number;
  htmlFor: string;
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
  $borderRadius: string;
  padding: string;
  borderColor: string;
  isSearch?: boolean;
  $placeholderTextColor: string;
  focusBorderColor: string;
}

export interface ContainerPlaceholderProps {
  color: string;
  $placeholderTextColor: string;
}

export interface IconProps {
  isFilled: boolean;
}
