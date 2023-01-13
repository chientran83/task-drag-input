export type SidebarType = {
  id: string;
  name: string;
  icon?: any;
};
export type SelectOption = {
  value: string;
  label: string;
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
};

export type MockType = {
  sidebar: SidebarType[];
  viewForm: InputType[];
  optionsSelectEditInput: SelectOption[];
  optionsRadioEditInput: SelectOption[];
};
export type typeEditField = {
  handleUpdateInput: Function;
  updatedItem: InputType | undefined;
  inputList: InputType[];
};
