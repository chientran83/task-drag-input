import classNames from "classnames/bind";
import { Control } from "react-hook-form";

import { InputType } from "app/consts/types";
import Input from "app/components/commons/Input";
import Radio from "app/components/commons/Radio";
import Select from "app/components/commons/Select";
import Checkbox from "app/components/commons/Checkbox";
import styles from "app/styles/components/ViewForm.module.scss";

const cx = classNames.bind(styles);
const ReturnRespectiveHtmlElement: React.FC<{
  input: InputType;
  control: Control;
  errors?: any;
  handleUpdateInput: Function;
}> = ({ input, control, errors, handleUpdateInput }): React.ReactElement => {
  const handleOnChangeValue: Function = (value: string): void => {
    let updatedInput: InputType = { ...input };
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
          label={input.label}
          name={`${input.name}`}
          error={errors[`${input.name}`]}
          control={control}
          value={input.value}
          className={cx("input__inner")}
          placeholder={input.placeholder}
          type={input.type}
          rules={input.rules}
          // onChange={(e) => handleOnChangeValue(e.target.value)}
          disabled={input.disabled}
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
          value={input.value}
          disabled={input.disabled}
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
          checked={input.checked}
        />
      );
    default:
      return <></>;
  }
};

export default ReturnRespectiveHtmlElement;
