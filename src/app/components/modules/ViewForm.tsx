import React from "react";
import classNames from "classnames/bind";
import { Input, InputNumber, Form } from "antd";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { ToolOutlined } from "@ant-design/icons";

import styles from "app/styles/components/ViewForm.module.scss";
import { InputType } from "app/consts/types";

const cx = classNames.bind(styles);
const ViewForm: React.FC<{ inputList: InputType[]; setUpdatedItem: React.Dispatch<React.SetStateAction<InputType | undefined>> }> = ({
  inputList,
  setUpdatedItem,
}): React.ReactElement => {
  const returnRespectiveHtmlElement: React.FC<InputType> = (
    input
  ): React.ReactElement => {
    switch (input.type) {
      case "number":
      case "password":
      case "email":
      case "text":
        return (
          <Form.Item label={input.label} className={cx("input__inner")}>
            <Input placeholder="Basic usage" type={input.type} />
          </Form.Item>
        );
      default:
        return <></>;
    }
  };

  const handleClickEditButon = (inputItem : any): void => {
    setUpdatedItem(inputItem)
  };
  
  return (
    <div className={cx("viewForm")}>
      <Droppable droppableId="viewForm">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {inputList.map((inputItem, index) => {
              return (
                <Draggable
                  draggableId={inputItem.id}
                  index={index}
                  key={inputItem.id}
                >
                  {(provided, snapshot) => (
                    <div className={cx("input__item")}>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {returnRespectiveHtmlElement(inputItem)}
                        <div
                          className={cx("input__icon")}
                          onClick={() => handleClickEditButon(inputItem)}
                        >
                          <ToolOutlined />
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
export default ViewForm;
