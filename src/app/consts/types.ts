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
  };
  min?: {
    value: number;
  };
  max?: {
    value: number;
  };
  minLength?: {
    value: number;
  };
  maxLength?: {
    value: number;
  };
  pattern?: {
    value: RegExp;
    message : string;
  };
  validate?: {
    value: Function | Object
  };
};
export type InputType = {
  id: string;
  name?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  disabled?: boolean;
  checked?: boolean;
  selected?: boolean;
  options?: SelectOption[];
  label?: string;
  rules?: RulesType;
};

export type MockType = {
  sidebar: SidebarType[];
  viewForm: InputType[];
  optionsSelectEditInput?: SelectOption[];
};
