export type OptionType = {
  value: number;
  label: string;
};

export type SelectPropsType = {
  options: OptionType[];
  placeholder: string;
  value: string;
  onChange: (value: number) => void;
  isError: boolean;
};
