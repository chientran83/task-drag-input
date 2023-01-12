import { MockType } from "app/consts/types";

const mock: MockType = {
  sidebar: [
    {
      id: "input",
      name: "input",
    },
    {
      id: "checkbox",
      name: "checkbox",
    },
  ],
  viewForm: [
    {
      name: "email",
      type: "text",
      label: "Your email",
    },
    {
      name: "age",
      type: "number",
      label: "Your age",
    },
  ],
  optionsSelectEditInput: [
    {
      value: "1",
      label: "Text",
    },
    {
      value: "2",
      label: "Number",
    },
    {
      value: "3",
      label: "Password",
    },
  ],
};

export const { optionsSelectEditInput, viewForm, sidebar } = mock;

export default mock;
