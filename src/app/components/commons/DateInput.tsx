import React from "react";
import { Form, DatePicker, Typography, DatePickerProps } from "antd";
import { Controller } from "react-hook-form";
import dayjs from "dayjs";
import type { RangePickerProps } from "antd/es/date-picker";

type DateInputType = DatePickerProps & {
  control: any;
  name: string;
  label?: string;
  error?: any;
  value?: any;
};

const { Text } = Typography;

const DateInput: React.FC<DateInputType> = ({
  control,
  label,
  name,
  error,
  value,
  ...prop
}): React.ReactElement => {
  return (
    <Form.Item label={label}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            {...field}
            status={error ? "error" : ""}
            defaultValue={
              value ? dayjs(value, "YYYY/MM/DD") : dayjs(dayjs(), "YYYY/MM/DD")
            }
            {...prop}
          />
        )}
      />
      {error && <Text type="danger">{error?.message}</Text>}
    </Form.Item>
  );
};

export default DateInput;
