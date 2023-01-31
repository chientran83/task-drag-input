import { FC, ReactElement, useEffect, useState } from "react";
import Input from "app/components/commons/Input";
import { useForm } from "react-hook-form";
import {
  optionsSelectEditInput,
} from "app/consts/mock";
import Select from "app/components/commons/Select";
import Checkbox from "app/components/commons/Checkbox";
import { Button, Form } from "antd";
import { typeEditField } from "app/consts/types";
import { CheckboxChangeEvent } from "antd/es/checkbox";

type typeInput = typeEditField & {
  segmented: string;
};

const EditInput: FC<typeInput> = ({
  handleUpdateInput,
  updatedItem,
  segmented,
}): ReactElement => {
  const {
    control,
    setValue,
    formState: { errors },
    handleSubmit,
    clearErrors
  } = useForm({
    mode: "onBlur",
  });
  
  useEffect(() => {
    if (segmented === "Validate") {
      setValue("regex", updatedItem?.rules?.pattern?.value);
      setValue("message", updatedItem?.rules?.pattern?.message);
    }
    clearErrors("value")
  }, [updatedItem, segmented]);

  const handleChangeInput = (value: string, name: string) => {
    setValue(name, value);

    handleUpdateInput({
      ...updatedItem,
      [name]: value,
    }, updatedItem?.id);
  };

  const handleChangeCheckbox = (e: CheckboxChangeEvent, name: string) => {
    setValue(name, e.target.checked);

    handleUpdateInput({
      ...updatedItem,
      [name]: e.target.checked,
    }, updatedItem?.id);
  };

  const onSubmit = (data: any) => {
    data?.regex && handleUpdateInput({
      ...updatedItem,
      rules: {
        pattern: {
          value: RegExp(data?.regex),
          message: data?.message
        }
      }
    }, updatedItem?.id);
  }

  return (
    <div className="edit-input">
      {updatedItem && segmented === "Attribute" ? (
        <Form>
          <Input
            error={errors.value}
            name="value"
            label="Value"
            value={updatedItem.value}
            onChange={(e) => handleChangeInput(e.target.value, "value")}
            disabled={updatedItem.disabled}
            rules={updatedItem?.rules}
            type={updatedItem.type}
            control={control}
          />

          <Input
            error={errors.placeholder}
            value={updatedItem.placeholder}
            name="placeholder"
            label="Placeholder"
            onChange={(e) => handleChangeInput(e.target.value, "placeholder")}
            control={control}
            disabled={updatedItem.disabled}
          />
          <Select
            name="type"
            label="type"
            placeholder="Select input type"
            onChange={(value) => {
              handleChangeInput(value, "type");
            }}
            value={updatedItem.type}
            control={control}
            options={optionsSelectEditInput}
            disabled={updatedItem.disabled}
          />
          <Checkbox
            name="disabled"
            label="Disabled"
            control={control}
            value={updatedItem.disabled}
            onChange={(e) => handleChangeCheckbox(e, "disabled")}
          />
        </Form>
      ) : (
        <Form>
          <Input
            name="regex"
            label="Regex"
            defaultValue={updatedItem?.rules?.pattern?.value}
            control={control}
          />
          <Input
            name="message"
            label="Error message"
            defaultValue={updatedItem?.rules?.pattern?.message}
            control={control}
          />
          <Button className="btn-submit" onClick={handleSubmit(onSubmit)}>
            Save change
          </Button>
        </Form>
      )}
    </div>
  );
};

export default EditInput;
