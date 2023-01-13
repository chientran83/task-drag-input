import classNames from "classnames/bind";
import { Control, FieldError, MultipleFieldErrors } from "react-hook-form";

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
}> = ({ input, control, errors }): React.ReactElement => {
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
          className={cx("input__inner")}
          placeholder={input.placeholder}
          type={input.type}
          rules={input.rules}
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
          options={input.options}
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
        />
      );
    case "checkbox":
      return (
        <Checkbox
          label={`${input.label}`}
          name={`${input.name}`}
          control={control}
          className={cx("input__inner")}
        />
      );
    default:
      return <></>;
  }
};

export default ReturnRespectiveHtmlElement;
