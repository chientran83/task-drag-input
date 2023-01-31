import {  Checkbox, CheckboxProps, Form } from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import { FC, ReactElement } from 'react';
import { Control, Controller } from "react-hook-form";

type CheckboxPropsUseForm = CheckboxGroupProps & {
  name: string;
  control: Control;
  label: string;
  value?: boolean;
};

const CheckBoxGroup:FC<CheckboxPropsUseForm> = ({
  name,
  label,
  control,
  ...res
}):ReactElement => {
  return (
    <Form.Item label={label}>
      <Controller
        name={name}
        render={({ field }) =>
          <Checkbox.Group
            {...field}
            {...res}
          />
        }
        control={control}
      />
    </Form.Item>
  )
}

export default CheckBoxGroup;