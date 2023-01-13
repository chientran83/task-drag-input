import { ChangeEvent, FC, ReactElement, useEffect } from "react";
import Input from "app/components/commons/Input";
import { useForm } from "react-hook-form";
import {
  optionsSelectEditInput,
  optionsRadioEditInput,
  optionsRadioValidateNumber,
} from "app/consts/mock";
import Select from "app/components/commons/Select";
import Checkbox from "app/components/commons/Checkbox";
import { Form, RadioChangeEvent } from "antd";
import Radio from "app/components/commons/Radio";
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
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const handleChangeInput = (value: string, name: string) => {
    setValue(name, value);

    handleUpdateInput({
      ...updatedItem,
      [name]: value,
    });
  };

  const handleChangeCheckbox = (e: CheckboxChangeEvent, name: string) => {
    setValue(name, e.target.checked);

    handleUpdateInput({
      ...updatedItem,
      [name]: e.target.checked,
    });
  };

  const handleChangeRadio = (e: RadioChangeEvent) => {
    setValue("rules", e.target.value);
    switch (e.target.value) {
      case "sdt":
        handleUpdateInput({
          ...updatedItem,
          rules: {
            pattern: {
              value:
                /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
              message: "phone number does not exist",
            },
          },
        });
        break;
      case "password":
        handleUpdateInput({
          ...updatedItem,
          rules: {
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message:
                "Minimum eight characters, at least one letter and one number",
            },
          },
        });
        break;
      case "password1":
        handleUpdateInput({
          ...updatedItem,
          rules: {
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
              message:
                "Minimum eight characters, at least one letter, one number and one special character",
            },
          },
        });
        break;
      default:
        break;
    }
  };

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
            rules={updatedItem.rules}
            type={updatedItem.type}
            control={control}
          />
          <Input
            error={errors.placeholder}
            defaultValue={updatedItem.placeholder}
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
            checked={updatedItem.disabled}
            onChange={(e) => handleChangeCheckbox(e, "disabled")}
          />
        </Form>
      ) : (
        <Form>
          <Radio
            name="rules"
            options={
              updatedItem?.type === "number"
                ? optionsRadioValidateNumber
                : optionsRadioEditInput
            }
            control={control}
            style={{
              flexDirection: "column",
              display: "flex",
              paddingTop: "20px",
            }}
            onChange={(e: RadioChangeEvent) => handleChangeRadio(e)}
          />
        </Form>
      )}
    </div>
  );
};

export default EditInput;
