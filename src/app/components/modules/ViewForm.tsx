import React from "react";
import classNames from "classnames/bind";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { ToolOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";
import { Button } from "antd";
import dayjs from "dayjs";

import styles from "app/styles/components/ViewForm.module.scss";
import { InputType } from "app/consts/types";
import ReturnRespectiveHtmlElement from "app/helpers/ReturnRespectiveHtmlElement";

const cx = classNames.bind(styles);
const ViewForm: React.FC<{
  inputList: InputType[];
  updatedItem: InputType | undefined;
  handleUpdateInput: Function;
  handleActiveInput: Function;
}> = ({
  inputList,
  updatedItem,
  handleUpdateInput,
  handleActiveInput,
}): React.ReactElement => {
  const {
    control,
    handleSubmit,
    trigger,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const resetAsyncForm = async () => {
    let inputs = {};
    await inputList.forEach((item) => {
      if (item.type === "date") {
        inputs = { ...inputs, [item.name]: dayjs(item.value, "YYYY/MM/DD") };
      } else {
        inputs = { ...inputs, [item.name]: item.value };
      }
    });
    reset(inputs);
  };

  const handleChangeInputList = async () => {
    await resetAsyncForm();
    trigger();
  };

  React.useEffect(() => {
    handleChangeInputList();
  }, [inputList]);

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
  };

  const getDraggableItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    background: isDragging && "#B2F5EA",
    ...draggableStyle,
  });

  return (
    <div className={cx("viewForm")}>
      <form className={cx("viewForm__form")}>
        <Droppable droppableId="viewForm">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className={cx("viewForm__list")}
            >
              {inputList.map((inputItem, index) => {
                return (
                  <Draggable
                    draggableId={inputItem.id}
                    index={index}
                    key={inputItem.id}
                  >
                    {(provided, snapshot) => {
                      return (
                        <div
                          className={cx("input__item", {
                            input__active: updatedItem?.id === inputItem.id,
                          })}
                          onClick={() => handleActiveInput(inputItem)}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getDraggableItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          {ReturnRespectiveHtmlElement({
                            input: inputItem,
                            control,
                            errors,
                            handleUpdateInput,
                            setValue,
                            handleActiveInput,
                            updatedItem,
                          })}
                          <div
                            className={cx("input__icon")}
                            onClick={() => handleActiveInput(inputItem)}
                          >
                            <ToolOutlined />
                          </div>
                        </div>
                      );
                    }}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        {!!inputList.length && (
          <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
        )}
      </form>
    </div>
  );
};
export default ViewForm;
