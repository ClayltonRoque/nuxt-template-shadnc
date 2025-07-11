export interface AdapterButtonProps {
  type?: string | object;
  size?: string;
  label?: string;
  iconPack?: string;
  iconLeft?: string;
  iconRight?: string;
  rounded?: boolean;
  loading?: boolean;
  outlined?: boolean;
  expanded?: boolean;
  inverted?: boolean;
  focused?: boolean;
  active?: boolean;
  hovered?: boolean;
  selected?: boolean;
  disabled?: boolean;
  nativeType?: "button" | "submit" | "reset";
  tag?: string | object;
}
