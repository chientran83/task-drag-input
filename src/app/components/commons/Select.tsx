import { Form, SelectProps } from "antd";
import { FC, ReactElement } from "react";
import { Select as SelectAntd } from "antd";
import { Control, Controller } from "react-hook-form";
import { SelectOption } from "app/consts/types";

type SelectPropsUseForm = SelectProps & {
  label?: string;
  name: string;
  control: Control;
  rules?: object;
  options?: SelectOption[];
};

const Select: FC<SelectPropsUseForm> = ({
  options,
  label,
  name,
  control,
  ...prop
}): ReactElement => {
  return (
    <Form.Item label={label}>
      <Controller
        name={name}
        render={({ field }) => (
          <SelectAntd {...field} options={options} {...prop} />
        )}
        control={control}
      />
    </Form.Item>
  );
};

export default Select;
