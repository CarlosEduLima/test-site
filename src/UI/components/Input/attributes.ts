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
