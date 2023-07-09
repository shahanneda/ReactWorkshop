import React from "react";
import { TodoListItem } from ".";
import styles from "./index.module.css";
import { TodoListItemViewer } from "./TodoListItemViewer";

type TodoListViewerProps = {
  listItems: Array<TodoListItem>;
  setListItems: (newItems: Array<TodoListItem>) => void;
};

export function TodoListViewer({
  listItems,
  setListItems,
}: TodoListViewerProps) {
  return (
    <div className={styles.todoListViewerWrapper}>
      {listItems.map((item, index) => {
        return (
          <TodoListItemViewer
            key={index}
            item={item}
            checkClicked={() => {
              console.log("Clicked item: " + index);
              const oldItemsCopy = [...listItems];
              oldItemsCopy[index].completed = !oldItemsCopy[index].completed;
              setListItems(oldItemsCopy);
            }}
          />
        );
      })}
    </div>
  );
}
