import { FC, ReactElement, useState } from "react";
import { Button, Segmented } from "antd";
import EditInput from "./EditInput";
import EditSelect from "./EditSelect";
import EditRadioAndCheckbox from "./EditCheckbox";
import { InputType, typeEditField } from "app/consts/types";
import EditCheckbox from "./EditCheckbox";

const EditField: FC<typeEditField & { handleDeleteInput: Function }> = ({
  handleUpdateInput,
  updatedItem,
  handleDeleteInput,
}): ReactElement => {
  const [segmented, setSegmented] = useState("Attribute");

  const renderComponentActive = (type: string | undefined) => {
    switch (type) {
      case "number":
      case "password":
      case "email":
      case "text":
        return (
          <EditInput
            segmented={segmented}
            handleUpdateInput={handleUpdateInput}
            updatedItem={updatedItem}
          />
        );
      case "radio":
        return (
          <EditSelect
            handleUpdateInput={handleUpdateInput}
            updatedItem={updatedItem}
          />
        );
      case "checkbox":
        return (
          <EditCheckbox
            handleUpdateInput={handleUpdateInput}
            updatedItem={updatedItem}
          />
        );
      case "select":
        return (
          <EditSelect
            handleUpdateInput={handleUpdateInput}
            updatedItem={updatedItem}
          />
        );
      default:
        break;
    }
  };

  return (
    <div className="edit-field">
      {updatedItem?.type && (
        <Segmented
          options={
            updatedItem?.type === "text" ||
            updatedItem?.type === "number" ||
            updatedItem?.type === "password"
              ? ["Attribute", "Validate"]
              : ["Attribute"]
          }
          value={segmented}
          onChange={(value: any) => setSegmented(value)}
        />
      )}
      {renderComponentActive(updatedItem?.type)}
      {updatedItem && (
        <Button
          style={{
            marginTop: "20px",
          }}
          type="primary"
          danger
          onClick={() => handleDeleteInput()}
        >
          Delete Element
        </Button>
      )}
    </div>
  );
};

export default EditField;
