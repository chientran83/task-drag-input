import { FC, ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import Checkbox from "app/components/commons/Checkbox";
import { Button, Form } from "antd";
import "app/styles/components/EditSelect.scss";
import Input from "app/components/commons/Input";

const EditRadioAndCheckbox: FC = (): ReactElement => {
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmitFrom = (data: object): void => {
    console.log(data);
  };

  return (
    <div className="edit-radio-and-checkbox">
      <Form>
        <Input
          name="label"
          control={control}
          placeholder="Enter label"
          style={{ marginTop: "10px" }}
        />
        <Checkbox
          name="disabled"
          label="Disabled"
          control={control}
          checked={watch("disabled")}
          onChange={() => {
            setValue("disabled", !watch("disabled"));
          }}
        />
      </Form>
    </div>
  );
};

export default EditRadioAndCheckbox;
