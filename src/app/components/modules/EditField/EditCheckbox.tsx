import { FC, ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import Checkbox from "app/components/commons/Checkbox";
import { Button, Form } from "antd";
import "app/styles/components/EditSelect.scss";
import Input from "app/components/commons/Input";
import { typeEditField } from "app/consts/types";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const EditCheckbox: FC<typeEditField> = ({
  handleUpdateInput,
  updatedItem,
}): ReactElement => {
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const handleChangeCheckbox = (e: CheckboxChangeEvent, name: string) => {
    setValue(name, e.target.checked);

    handleUpdateInput({
      ...updatedItem,
      [name]: e.target.checked,
    });
  };

  const handleChangeInput = (value: string, name: string) => {
    setValue(name, value);

    handleUpdateInput({
      ...updatedItem,
      [name]: value,
    });
  };

  return (
    <div className="edit-radio-and-checkbox">
      <Form>
        <Input
          name="label"
          label="Label"
          value={updatedItem?.label}
          control={control}
          placeholder="Enter label"
          onChange={(e) => handleChangeInput(e.target.value, "label")}
        />

        <Checkbox
          name="disabled"
          label="Disabled"
          control={control}
          value={updatedItem?.disabled}
          onChange={(e) => handleChangeCheckbox(e, "disabled")}
        />
      </Form>
    </div>
  );
};

export default EditCheckbox;
