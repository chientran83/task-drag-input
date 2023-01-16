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
  setUpdatedItem: React.Dispatch<React.SetStateAction<InputType | undefined>>;
  updatedItem: InputType | undefined;
  handleUpdateInput: Function;
}> = ({
  inputList,
  setUpdatedItem,
  updatedItem,
  handleUpdateInput,
}): React.ReactElement => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const handleActiveInput = (e: any, inputItem: any) => {
    e.target.getElementsByTagName("input")[0].focus();
    setUpdatedItem(inputItem);
  };

  const handleClickEditButon = (inputItem: InputType): void => {
    setUpdatedItem(inputItem);
  };

  const onSubmit = (data: any) => {
    console.log(dayjs(data.dateOfBirth).format("YYYY/MM/DD"));
    alert(JSON.stringify(data));
  };

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
                    {(provided) => (
                      <div
                        className={cx("input__item", {
                          input__active: updatedItem?.id === inputItem.id,
                        })}
                        onMouseEnter={(e: any) =>
                          handleActiveInput(e, inputItem)
                        }
                      >
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {ReturnRespectiveHtmlElement({
                            input: inputItem,
                            control,
                            errors,
                            handleUpdateInput,
                            setValue,
                          })}
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
        {!!inputList.length && (
          <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
        )}
      </form>
    </div>
  );
};
export default ViewForm;
