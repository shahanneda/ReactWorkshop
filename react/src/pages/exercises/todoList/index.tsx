import React, { useState } from "react";
import { Header } from "./Header";
import { NewItemCreator } from "./NewItemCreator";
import { TodoListViewer } from "./TodoListViewer";

// Exercises:
// Add a  "view more" button and description for each todo list item, when clicked, "alert()" the description of that todo list item

// Add a counter at the top of the page that shows you how many todo list items you have left to complete. (You can display the counter inside the Header, e.g. have the header display "Todo List Header: 7 items remaining")

//  (Challenge) Add a delete button beside each list item which will delete the todo list item

// (Challenge) Save the todo list items to local storage and load them when a person reloads the page  (https://blog.logrocket.com/using-localstorage-react-hooks/)

export type TodoListItem = {
  name: string;
  completed: boolean;
};

export default function TodoListWrapper() {
  // Updating an array is tricky:
  // https://react.dev/learn/updating-arrays-in-state

  const [listItems, setListItems] = useState<TodoListItem[]>([
    { name: "Item 0", completed: false },
    { name: "Item 1", completed: true },
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
      <TodoListViewer listItems={listItems} setListItems={setListItems} />
    </>
  );
}
