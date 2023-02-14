import React from "react";
import classNames from "classnames/bind";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import dayjs from "dayjs";

import styles from "app/styles/components/Home.module.scss";
import Sidebar from "app/components/modules/Sidebar";
import mock from "app/consts/mock";
import ViewForm from "app/components/modules/ViewForm";
import { InputType, SidebarType } from "app/consts/types";
import EditField from "app/components/modules/EditField";

const cx = classNames.bind(styles);
const Home: React.FC = (): React.ReactElement => {
  const [sidebarList, setSidebarList] = React.useState<SidebarType[]>(
    mock.sidebar
  );
  const [inputList, setInputList] = React.useState<InputType[]>(mock.viewForm);
  const [updatedItem, setUpdatedItem] = React.useState<InputType>();

  const handleActiveInput: Function = (inputItem: InputType): void => {
    setUpdatedItem(inputItem);
  };

  const handleUpdateInput: Function = (
    data: InputType,
    inputId: string
  ): void => {
    let inputData = [...inputList];
    const itemIndex = inputList.findIndex((input) => input.id === inputId);
    inputData[itemIndex] = data;
    setUpdatedItem(data);
    setInputList(inputData);
  };

  const handleDeleteInput: Function = (): void => {
    let inputData = [...inputList];
    const dataAfterDelete = inputData.filter(
      (input) => input.id !== updatedItem?.id
    );
    setInputList(dataAfterDelete);
    setUpdatedItem(undefined);
  };

  const handleReOrderOtherArea: Function = (
    state: InputType[],
    destinationId: number,
    newItem: InputType
  ): InputType[] => {
    let initState = [...state];
    initState.splice(destinationId, 0, newItem);
    return initState;
  };

  const handleReOrderInternal: Function = (
    state: InputType[],
    originalPosition: number,
    destinationId: number
  ): InputType[] => {
    let initState = [...state];
    const [movedItem] = initState.splice(originalPosition, 1);
    initState.splice(destinationId, 0, movedItem);
    return initState;
  };

  const onDragEnd = (result: DropResult): void => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (destination.droppableId === "viewForm") {
      //handle when drag internal
      if (source.droppableId === "viewForm") {
        const valueAfterReOrder: InputType[] = handleReOrderInternal(
          inputList,
          source.index,
          destination.index
        );
        setInputList(valueAfterReOrder);
      } else {
        //handle when drag from sibar to viewForm
        let generateElement: InputType = {
          id: Date.now().toString(),
          name: Date.now().toString(),
          type: draggableId,
          label: "label",
        };
        if (draggableId === "date") {
          generateElement.value = dayjs(Date.now()).format("YYYY/MM/DD");
        }
        const valueAfterReOrder: InputType[] = handleReOrderOtherArea(
          inputList,
          destination.index,
          generateElement
        );
        setUpdatedItem(generateElement);
        setInputList(valueAfterReOrder);
      }
    }
  };

  return (
    <div className={cx("container")}>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={cx("side-bar")}>
          <Sidebar
            inputList={inputList}
            sidebarList={sidebarList}
            setInputList={setInputList}
          />
        </div>
        <div className={cx("view-from")}>
          <ViewForm
            inputList={inputList}
            updatedItem={updatedItem}
            handleUpdateInput={handleUpdateInput}
            handleActiveInput={handleActiveInput}
          />
        </div>
      </DragDropContext>
      <div className={cx("edit-fied")}>
        <EditField
          handleUpdateInput={handleUpdateInput}
          updatedItem={updatedItem}
          handleDeleteInput={handleDeleteInput}
        />
      </div>
    </div>
  );
};

export default Home;
