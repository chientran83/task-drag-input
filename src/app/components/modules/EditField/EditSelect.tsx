import { FC, ReactElement, useState } from "react";
import { useForm } from "react-hook-form";
import Checkbox from "app/components/commons/Checkbox";
import { DeleteFilled } from "@ant-design/icons";
import { Button, Form } from "antd";
import "app/styles/components/EditSelect.scss";
import { SelectOption } from "app/consts/types";
import Input from "app/components/commons/Input";

type editSelectOption = SelectOption & {
  id: number;
};

const EditSelect: FC = (): ReactElement => {
  const [options, setOptions] = useState<editSelectOption[]>([
    { value: "1", label: "aaaaa", id: 1 },
  ]);

  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const handleOptionSelect: Function = (
    value: string,
    index: number,
    text: string
  ): void => {
    const coverOptions = [...options];
    coverOptions[index] = { ...coverOptions[index], [text]: value };
    setOptions(coverOptions);
  };

  const handleDeleteOption: Function = (id: number): void => {
    const coverOptions = options.filter((item) => item.id !== id);
    setOptions(coverOptions);
  };

  const handleAddOption: Function = (): void => {
    const newId: number =
      (options.length > 0 && options[options.length - 1].id + 1) || 1;
    const coverOptions = [...options];
    coverOptions.push({
      id: newId,
      value: "",
      label: "",
    });
    setOptions(coverOptions);
  };

  const onSubmitFrom = (data: object): void => {
    console.log(data);
  };

  return (
    <div className="edit-select">
      <Form>
        <table>
          <thead>
            <tr>
              <th>VaLue</th>
              <th>Label</th>
            </tr>
          </thead>
          <tbody>
            {options?.map((item, index) => (
              <tr key={item.id}>
                <td>
                  <input
                    value={item.value}
                    onChange={(e) =>
                      handleOptionSelect(e.target.value, index, "value")
                    }
                  />
                </td>
                <td>
                  <input
                    value={item.label}
                    onChange={(e) =>
                      handleOptionSelect(e.target.value, index, "label")
                    }
                  />
                </td>
                <td>
                  <DeleteFilled onClick={() => handleDeleteOption(item.id)} />
                </td>
              </tr>
            ))}
            <tr>
              <td className="add-option" onClick={() => handleAddOption()}>
                Add option
              </td>
            </tr>
          </tbody>
        </table>

        <Input
          name="label"
          label="Label"
          control={control}
          placeholder="Enter label"
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
        <br />
        <Button className="btn-submit" onClick={handleSubmit(onSubmitFrom)}>
          Save change
        </Button>
      </Form>
    </div>
  );
};

export default EditSelect;