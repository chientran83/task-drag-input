import { FC, ReactElement, useState } from "react";
import { Segmented } from "antd";
import EditInput from "./EditInput";
import EditSelect from "./EditSelect";
import EditRadioAndCheckbox from "./EditRadioAndCheckbox";
import { InputType, typeEditField } from "app/consts/types";

const EditField: FC<typeEditField> = ({
  handleUpdateInput,
  updatedItem,
}): ReactElement => {
  const [segmented, setSegmented] = useState("Attribute");

  const renderComponentActive = (type: string | undefined) => {
    switch (type) {
      case "text":
        return (
          <EditInput
            segmented={segmented}
            handleUpdateInput={handleUpdateInput}
            updatedItem={updatedItem}
          />
        );
      case "radio":
        return <EditSelect />;
      case "checkbox":
        return <></>;
      case "select":
        return <EditSelect />;
      default:
        break;
    }
  };

  return (
    <div className="edit-field">
      {updatedItem?.type && (
        <Segmented
          options={
            updatedItem?.type === "text"
              ? ["Attribute", "Validate"]
              : ["Attribute"]
          }
          value={segmented}
          onChange={(value: any) => setSegmented(value)}
        />
      )}
      {renderComponentActive(updatedItem?.type)}
    </div>
  );
};

export default EditField;
