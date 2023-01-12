import { CheckboxProps } from "antd";
import { FC, ReactElement } from "react";
import { Checkbox as CheckboxAntd } from "antd";
import { Controller } from "react-hook-form";

type CheckboxPropsUseForm = CheckboxProps & {
  name: string;
  control: any;
  rules?: object;
  labal: string;
};

const Checkbox: FC<CheckboxPropsUseForm> = ({
  name,
  labal,
  control,
  ...prop
}): ReactElement => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <CheckboxAntd {...field} {...prop}>
          {labal}
        </CheckboxAntd>
      )}
      control={control}
    />
  );
};

export default Checkbox;
