import { CheckboxProps } from "antd";
import { FC, ReactElement } from "react";
import { Checkbox as CheckboxAntd } from "antd";
import { Controller } from "react-hook-form";

type CheckboxPropsUseForm = CheckboxProps & {
  name: string;
  control: any;
  rules?: object;
  textChild: string;
};

const Checkbox: FC<CheckboxPropsUseForm> = ({
  name,
  textChild,
  control,
  ...prop
}): ReactElement => {
  return (
    <Controller
      name={name}
      render={({ field }) => (
        <CheckboxAntd {...field} {...prop}>
          {textChild}
        </CheckboxAntd>
      )}
      control={control}
    />
  );
};

export default Checkbox;
