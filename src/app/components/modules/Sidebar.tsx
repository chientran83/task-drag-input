import React from "react";
import classNames from "classnames/bind";
import { Droppable, Draggable } from "react-beautiful-dnd";

import styles from "app/styles/components/Sidebar.module.scss";
import { SidebarType } from "app/consts/types";

const cx = classNames.bind(styles);

const Sidebar: React.FC<{ sidebarList: SidebarType[] }> = ({
  sidebarList,
}): React.ReactElement => {
  return (
    <div className={cx("sidebar")}>
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
                      <div className={cx("sidebar__item")} key={sidebarItem.id}>
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
  );
};
export default Sidebar;
