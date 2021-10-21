/* eslint-disable linebreak-style */
/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable linebreak-style */
export function TextInputAttributes(
  onFocus: any,
  onBlur: any,
  secureTextEntry = false,
) {
  const attributes = {
    onFocus,
    onBlur,
    secureTextEntry,
  };

  return attributes;
}

export function IconInputAttributes(
  name: string,
  size: number,
  color: string,
) {
  const attributes = {
    name,
    size,
    color,
  };

  return attributes;
}
