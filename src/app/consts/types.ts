export type SidebarType = {
  id: string;
  name: string;
  icon?: any;
};
export type SelectOption = {
  value: string;
  label: string;
};
type RulesType = {
  required?: {
    value: boolean;
    message: string;
  };
  min?: {
    value: number;
    message: string;
  };
  max?: {
    value: number;
    message: string;
  };
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
  validate?: {
    value: Function | Object;
  };
};
export type InputType = {
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
  value?: any;
  disabled?: boolean;
  options?: SelectOption[];
  label?: string;
  rules?: RulesType;
  defaultValue?: string | number;
};

export type MockType = {
  sidebar: SidebarType[];
  viewForm: InputType[];
  optionsSelectEditInput: SelectOption[];
  optionsRadioEditInput: SelectOption[];
  optionsRadioValidateNumber: SelectOption[];
};
export type typeEditField = {
  handleUpdateInput: Function;
  updatedItem: InputType | undefined;
};
