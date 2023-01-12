import { CheckboxProps } from "antd";
import { FC, ReactElement } from "react";
import { Checkbox as CheckboxAntd } from "antd";
import { Controller } from "react-hook-form";

type CheckboxPropsUseForm = CheckboxProps & {
  name: string;
  control: any;
  rules?: object;
  label: string;
};

const Checkbox: FC<CheckboxPropsUseForm> = ({
  name,
  label,
  control,
  ...prop
}): ReactElement => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <CheckboxAntd {...field} {...prop}>
          {label}
        </CheckboxAntd>
      )}
      control={control}
    />
  );
};

export default Checkbox;
