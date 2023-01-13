import { FC, ReactElement, useEffect } from "react";
import Input from "app/components/commons/Input";
import { useForm } from "react-hook-form";
import { optionsSelectEditInput, optionsRadioEditInput } from "app/consts/mock";
import Select from "app/components/commons/Select";
import Checkbox from "app/components/commons/Checkbox";
import { Form } from "antd";
import Radio from "app/components/commons/Radio";
import { typeEditField } from "app/consts/types";

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

    console.log(updatedItem);

    handleUpdateInput({
      ...updatedItem,
      [name]: value,
    });
  };

  return (
    <div className="edit-input">
      {updatedItem && segmented === "Attribute" ? (
        <Form>
          <Input
            error={errors.value}
            name="value"
            label="Value"
            defaultValue={updatedItem.value}
            onChange={(e) => handleChangeInput(e.target.value, "value")}
            // rules={{
            //   pattern: {
            //     value: /^john$/,
            //     message: "firstName is invalid",
            //   },
            // }}
            control={control}
          />
          <Input
            error={errors.placeholder}
            defaultValue={updatedItem.placeholder}
            name="placeholder"
            label="Placeholder"
            onChange={(e) => handleChangeInput(e.target.value, "placeholder")}
            // rules={{
            //   pattern: {
            //     value: /^john$/,
            //     message: "firstName is invalid",
            //   },
            // }}
            control={control}
          />
          <Select
            name="type"
            label="type"
            placeholder="Select input type"
            onChange={(value) => {
              handleChangeInput(value, "type");
            }}
            control={control}
            options={optionsSelectEditInput}
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
      ) : (
        <Form>
          <Radio
            name="validate"
            options={optionsRadioEditInput}
            control={control}
            style={{
              flexDirection: "column",
              display: "flex",
              paddingTop: "20px",
            }}
          />
        </Form>
      )}
    </div>
  );
};

export default EditInput;
