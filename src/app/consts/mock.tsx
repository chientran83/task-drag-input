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
  viewForm: [
    {
      id: "0",
      name: "email",
      type: "text",
      label: "Your email",
      placeholder: "please inter placeholder !",
    },
    {
      id: "1",
      name: "age",
      type: "number",
      label: "Your age",
    },
    {
      id: "2",
      name: "gender",
      type: "radio",
      label: "Your gender",
      options: [
        {
          value: "male",
          label: "Male",
        },
        {
          value: "female",
          label: "Female",
        },
      ],
    },
    {
      id: "3",
      name: "job",
      type: "select",
      label: "Your Job",
      options: [
        {
          value: "it",
          label: "It",
        },
        {
          value: "marketing",
          label: "Marketing",
        },
        {
          value: "sell",
          label: "Sell",
        },
      ],
    },
    {
      id: "4",
      name: "confirm",
      type: "checkbox",
      label: "do you agree?",
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
  optionsRadioEditInput: [
    {
      value: "sdt",
      label: "Phone Number",
    },
    {
      value: "password",
      label: "Password",
    },
    {
      value: "email",
      label: "Email",
    },
  ],
};

export const {
  optionsSelectEditInput,
  viewForm,
  sidebar,
  optionsRadioEditInput,
} = mock;

export default mock;
