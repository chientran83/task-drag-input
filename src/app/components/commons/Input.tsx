import { Form, InputProps, Typography } from "antd";
import { FC, ReactElement } from "react";
import { Input as InputAntd } from "antd";
import { Control, Controller, ErrorOption } from "react-hook-form";

type InputPropsUseForm = InputProps & {
  label?: string;
  name: string;
  control: Control;
  rules?: object;
  error?: ErrorOption;
};
const { Text } = Typography;

const Input: FC<InputPropsUseForm> = ({
  label,
  error,
  name,
  control,
  rules,
  ...prop
}): ReactElement => {
  return (
    <Form.Item label={label}>
      <Controller
        rules={rules ? rules : {}}
        name={name}
        render={({ field }) => (
          <InputAntd {...field} status={error ? "error" : ""} {...prop} />
        )}
        control={control}
      />
      {error && <Text type="danger">{error?.message}</Text>}
    </Form.Item>
  );
};

export default Input;
