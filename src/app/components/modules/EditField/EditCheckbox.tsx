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

  return (
    <div className="edit-radio-and-checkbox">
      <Form>
        <Input
          name="label"
          label="Label"
          defaultValue={updatedItem?.label}
          control={control}
          placeholder="Enter label"
        />

        <Checkbox
          name="checked"
          label="Checked"
          control={control}
          checked={updatedItem?.checked}
          onChange={(e) => handleChangeCheckbox(e, "checked")}
        />

        <Checkbox
          name="disabled"
          label="Disabled"
          control={control}
          checked={updatedItem?.disabled}
          onChange={(e) => handleChangeCheckbox(e, "disabled")}
        />
      </Form>
    </div>
  );
};

export default EditCheckbox;
