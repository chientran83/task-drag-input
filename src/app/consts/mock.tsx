import { MockType } from "app/consts/types";
import {
  FormOutlined,
  CheckSquareOutlined,
  CheckCircleOutlined,
  SelectOutlined,
} from "@ant-design/icons";

const mock: MockType = {
  sidebar: [
    {
      id: "text",
      name: "text",
      icon: <FormOutlined />,
    },
    {
      id: "checkbox",
      name: "checkbox",
      icon: <CheckSquareOutlined />,
    },
    {
      id: "radio",
      name: "radio",
      icon: <CheckCircleOutlined />,
    },
    {
      id: "select",
      name: "select",
      icon: <SelectOutlined />,
    },
  ],
  optionsSelectEditInput: [
    {
      value: "text",
      label: "Text",
    },
    {
      value: "number",
      label: "number",
    },
    {
      value: "password",
      label: "password",
    },
    {
      value: "email",
      label: "email",
    },
  ],
  optionsRadioEditInput: [
    {
      value: "password",
      label: "Minimum eight characters, at least one letter and one number",
    },
    {
      value: "password1",
      label:
        "Minimum eight characters, at least one letter, one number and one special character",
    },
  ],
  optionsRadioValidateNumber: [
    {
      value: "sdt",
      label: "Format phone number vietnames",
    },
  ],
  viewForm: [],
};

export const {
  optionsSelectEditInput,
  viewForm,
  sidebar,
  optionsRadioEditInput,
  optionsRadioValidateNumber,
} = mock;

export default mock;
