import classNames from "classnames/bind";
import { Control } from "react-hook-form";

import { InputType } from "app/consts/types";
import Input from "app/components/commons/Input";
import Radio from "app/components/commons/Radio";
import Select from "app/components/commons/Select";
import Checkbox from "app/components/commons/Checkbox";
import styles from "app/styles/components/ViewForm.module.scss";
import DateInput from "app/components/commons/DateInput";
import FileInput from "app/components/commons/FileInput";
import React from "react";

const cx = classNames.bind(styles);
const ReturnRespectiveHtmlElement: React.FC<{
  input: InputType;
  control: Control;
  errors?: any;
  handleUpdateInput: Function;
  setValue: any;
}> = ({
  input,
  control,
  errors,
  handleUpdateInput,
  setValue,
}): React.ReactElement => {
    const handleOnChangeValue: Function = async (value: string, name: string) => {
      console.log(value);
      let updatedInput: InputType = { ...input };
      setValue(name, value);
      updatedInput.value = value;
      handleUpdateInput(updatedInput);
    };

    switch (input.type) {
      case "number":
      case "password":
      case "email":
      case "text":
        return (
          <Input
            error={errors[`${input.name}`]}
            name={`${input.name}`}
            label={input.label}
            value={input.value}
            disabled={input.disabled}
            rules={input.rules}
            control={control}
            className={cx("input__inner")}
            placeholder={input.placeholder}
            type={input.type}
            // onChange={(e) => handleOnChangeValue(e.target.value)}
            onChange={(e: any) => handleOnChangeValue(e.target.value, input.name)}
          />
        );
      case "radio":
        return (
          <Radio
            label={input.label || "label"}
            name={`${input.name}`}
            control={control}
            className={cx("input__inner")}
            type={input.type}
            value={input.value}
            options={input.options}
            disabled={input.disabled}
            onChange={(e) => handleOnChangeValue(e.target.value, input.name)}
          />
        );
      case "select":
        return (
          <Select
            label={input.label}
            name={`${input.name}`}
            control={control}
            className={cx("input__inner")}
            options={input.options}
            defaultValue={input.value}
            disabled={input.disabled}
            mode={input.mode ? "multiple" : undefined}
            onChange={(value) => handleOnChangeValue(value, input.name)}
          />
        );
      case "checkbox":
        return (
          <Checkbox
            label={`${input.label}`}
            name={`${input.name}`}
            control={control}
            className={cx("input__inner")}
            value={input.value}
            disabled={input.disabled}
            onChange={(e) => handleOnChangeValue(e.target.checked, input.name)}
          />
        );
      case "date":
        return (
          <DateInput
            label={`${input.label}`}
            name={`${input.name}`}
            control={control}
            className={cx("input__inner")}
            value={input.value}
            disabled={input.disabled}
            onChange={(value) => handleOnChangeValue(value)}
          />
        );
      case "file":
        return (
          <FileInput
            label={`${input.label}`}
            name={`${input.name}`}
            control={control}
            className={cx("input__inner")}
            disabled={input.disabled}
            onChange={(value) => handleOnChangeValue(value)}
          />
        );
      default:
        return <></>;
    }
  };

export default ReturnRespectiveHtmlElement;
