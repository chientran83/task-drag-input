import React from "react";
import classNames from "classnames/bind";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

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

  const handleUpdateInput: Function = ({
    updatedItemId,
    inputList,
    data,
  }: {
    updatedItemId: string;
    inputList: InputType[];
    data: InputType;
  }): void => {
    console.log(inputList);

    let inputData = [...inputList];
    const itemIndex = inputList.findIndex(
      (input) => input.id === updatedItemId
    );
    inputData[itemIndex] = data;
    setInputList(inputData);
  };

  const handleDeleteInput: Function = ({
    updatedItemId,
    inputList,
  }: {
    updatedItemId: string;
    inputList: InputType[];
  }): void => {
    let inputData = [...inputList];
    const dataAfterDelete = inputData.filter(
      (input) => input.id !== updatedItemId
    );
    setInputList(dataAfterDelete);
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
        const generateElement: InputType = {
          id: `${inputList.length}`,
          type: draggableId,
          label: "label",
        };
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
          <Sidebar sidebarList={sidebarList} />
        </div>
        <div className={cx("view-from")}>
          <ViewForm inputList={inputList} setUpdatedItem={setUpdatedItem} />
        </div>
      </DragDropContext>
      <div className={cx("edit-fied")}>
        <EditField
          handleUpdateInput={handleUpdateInput}
          updatedItem={updatedItem}
          inputList={inputList}
        />
      </div>
    </div>
  );
};

export default Home;
