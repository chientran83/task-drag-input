import React from "react";
import classNames from "classnames/bind";
import { Droppable, Draggable } from "react-beautiful-dnd";

import styles from "app/styles/components/Sidebar.module.scss";
import { InputType, SidebarType } from "app/consts/types";
import { Button } from "antd";

const cx = classNames.bind(styles);
const Sidebar: React.FC<{
  sidebarList: SidebarType[];
  setInputList: React.Dispatch<React.SetStateAction<InputType[]>>;
}> = ({ sidebarList, setInputList }): React.ReactElement => {
  const jsonInput = React.useRef<HTMLInputElement | any>(null);
  const handleOnClickImport = (): void => {
    jsonInput.current?.click();
  };
  const handleOnclickExport = (): void => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(sidebarList)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };

  function onReaderLoad(event : any) {
    var obj = JSON.parse(event.target.result);
    setInputList(obj.data);
  }

  const handleChangeInputFile = (): void => {
    var reader = new FileReader();
    reader.onload = onReaderLoad;
    reader.readAsText(jsonInput.current.files[0]);
  };

  return (
    <div className={cx("sidebar")}>
      <div className={cx("sidebar__list")}>
        <Droppable droppableId="sidebar">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {sidebarList?.map<React.ReactElement>((sidebarItem, index) => {
                return (
                  <Draggable
                    draggableId={sidebarItem.id}
                    index={index}
                    key={sidebarItem.id}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div
                          className={cx("sidebar__item")}
                          key={sidebarItem.id}
                        >
                          <div className={cx("sidebar__icon")}>
                            {sidebarItem.icon && sidebarItem.icon}
                          </div>
                          <div className={cx("sidebar__name")}>
                            {sidebarItem.name}
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
      <div className={cx("sidebar__button")}>
        <input
          type="file"
          ref={jsonInput}
          className={cx("sidebar__input")}
          onChange={() => handleChangeInputFile()}
        />
        <Button onClick={() => handleOnClickImport()}>Import</Button>
        <Button onClick={() => handleOnclickExport()}>Export</Button>
      </div>
    </div>
  );
};
export default Sidebar;
