import { MockType } from "app/consts/types";
import {
  FormOutlined,
  CheckSquareOutlined,
  CheckCircleOutlined,
  SelectOutlined,
  FieldTimeOutlined,
  FileImageOutlined,
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
    {
      id: "date",
      name: "date",
      icon: <FieldTimeOutlined />,
    },
    {
      id: "file",
      name: "file",
      icon: <FileImageOutlined />,
    },
  ],
  viewForm: [
    {
      id: "0",
      name: "email",
      type: "text",
      label: "Your email",
      placeholder: "please inter placeholder !",
      value: "chientran@gmail.com",
      rules: {
        required: {
          value: true,
          message: "Please enter email !",
        },
      },
    },
    {
      id: "1",
      name: "age",
      type: "number",
      label: "Your age",
      value: 24,
    },
    {
      id: "2",
      name: "gender",
      type: "radio",
      label: "Your gender",
      value: "female",
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
      value: "it",
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
      id: "5",
      name: "dateOfBirth",
      type: "date",
      label: "your dateOfBirth",
      value: "2023/01/05",
      disabled: false,
    },
    {
      id: "6",
      name: "image",
      type: "file",
      label: "your image",
      disabled: false,
    },
  ],
  optionsSelectEditInput: [
    {
      value: "text",
      label: "Text",
    },
    {
      value: "number",
      label: "Number",
    },
    {
      value: "password",
      label: "Password",
    },
  ],
};

export const { optionsSelectEditInput, viewForm, sidebar } = mock;

export default mock;
