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
        required : {
          value: true,
          message: "Please enter email !"
        }
      },
    },
    // {
    //   id: "000",
    //   type: "text",
    //   label: "Your email2",
    //   placeholder: "please inter placeholder2 !",
    //   value: "chientran2@gmail.com",
    //   rules : {
    // required : {
    //   value: true,
    //   message: "Please enter email !"
    // }
    //   }
    // },
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
      id: "4",
      name: "confirm",
      type: "checkbox",
      label: "do you agree?",
      value: true,
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
      value: "none",
      label: "Default",
    },
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
      value: "none",
      label: "Default",
    },
    {
      value: "sdt",
      label: "Format phone number vietnames",
    },
  ]
};

export const {
  optionsSelectEditInput,
  viewForm,
  sidebar,
  optionsRadioEditInput,
  optionsRadioValidateNumber,
} = mock;

export default mock;
