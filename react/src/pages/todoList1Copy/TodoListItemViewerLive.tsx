import React from "react";
import { TodoListItem } from "./index";
import styles from "./index.module.css";

type TodoListItemViewerProps = {
  item: TodoListItem;
};

export function TodoListItemViewer({ item }: TodoListItemViewerProps) {
  return (
    <div className={styles.todoListItemWrapper}>
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
