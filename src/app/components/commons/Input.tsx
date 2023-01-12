import { Form, InputProps, Typography } from "antd";
import { FC, ReactElement } from "react";
import { Input as InputAntd } from "antd";
import { Controller } from "react-hook-form";

type InputPropsUseForm = InputProps & {
  label?: string;
  name: string;
  control?: any;
  rules?: object;
  error?: any;
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
        rules={rules}
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
