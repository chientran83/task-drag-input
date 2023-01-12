import { Form, RadioProps } from "antd";
import { FC, ReactElement } from "react";
import { Radio as RadioAntd } from "antd";
import { Control, Controller } from "react-hook-form";
import { SelectOption } from "app/consts/types";

type RadioPropsUseForm = RadioProps & {
  label?: string;
  name: string;
  control: Control;
  rules?: object;
  options?: SelectOption[];
};

const Radio: FC<RadioPropsUseForm> = ({
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
          <RadioAntd.Group {...field} {...prop}>
            {options?.map((item: SelectOption) => (
              <RadioAntd key={item.value} value={item?.value}>
                {item.label}
              </RadioAntd>
            ))}
          </RadioAntd.Group>
        )}
        control={control}
      />
    </Form.Item>
  );
};

export default Radio;
