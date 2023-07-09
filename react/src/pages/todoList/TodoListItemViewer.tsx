import React from "react";
import { TodoListItem } from "./index";
import styles from "./index.module.css";

type TodoListItemViewerProps = {
  item: TodoListItem;
  checkClicked: () => void;
};

export function TodoListItemViewer({
  item,
  checkClicked,
}: TodoListItemViewerProps) {
  return (
    <div className={styles.todoListItemWrapper}>
      <input type="checkbox" checked={item.completed} onChange={checkClicked} />
      <div
        style={{
          color: item.completed ? "green" : "white",
        }}
        className={styles.todoListItem}
      >
        {item.name}
      </div>
    </div>
  );
}
