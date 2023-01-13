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
  viewForm: [],
};

export default mock;
