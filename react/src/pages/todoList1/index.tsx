import React, { createElement, useState } from "react";
import { Header } from "./Header";
import styles from "./index.module.css";

type TodoListItem = {
  name: string;
  completed: boolean;
};
// Excersize ideas:

// Add a  "view more" button for each todo list item, when clicked, "alert()" the description of that todo list item
// Harder: Add a delete button

export default function TodoList() {
  // Updating an array is tricky:
  // https://react.dev/learn/updating-arrays-in-state
  const [listItems, setListItems] = useState<TodoListItem[]>([
    { name: "Item 0", completed: false },
    { name: "Item 1", completed: false },
    { name: "Item 2", completed: false },
  ]);

  return (
    <>
      <Header />
      <NewItemCreator
        createElement={(itemName) => {
          console.log("Create item: " + itemName);
          setListItems([...listItems, { name: itemName, completed: false }]);
        }}
      />
      <div className={styles.todoListWrapper}>
        {listItems.map((item, index) => {
          return (
            <TodoListItem
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
    </>
  );
}

type NewItemCreatorProps = {
  createElement: (itemName: string) => void;
};

function NewItemCreator({ createElement }: NewItemCreatorProps) {
  const [currentText, setCurrentText] = useState("");
  return (
    <div>
      <input
        type={"text"}
        value={currentText}
        onChange={(e) => {
          setCurrentText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          createElement(currentText);
          setCurrentText("");
        }}
      >
        Add New Item
      </button>
    </div>
  );
}

type TodoListItemProps = {
  item: TodoListItem;
  checkClicked: () => void;
};
function TodoListItem({ item, checkClicked }: TodoListItemProps) {
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
