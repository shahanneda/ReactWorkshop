import React, { useState } from "react";
import { Header } from "./Header";
import { NewItemCreator } from "./NewItemCreator";
import { TodoListItemViewer } from "./TodoListItemViewerLive";
import { TodoListViewer } from "./TodoListViewer";

// Exercise ideas:
// Add a  "view more" button and description for each todo list item, when clicked, "alert()" the description of that todo list item

// Add a counter at the top of the page that shows you how many todo list items you have left to complete. (You can display the counter inside the Header, e.g. have the header display "Todo List Header: 7 items remaining")

//  (Challenge) Add a delete button which will delete a todo list item

// (Challenge) Save the todo list items to local storage and load them when a person reloads the page  (https://blog.logrocket.com/using-localstorage-react-hooks/)

export type TodoListItem = {
  name: string;
  completed: boolean;
};

export default function TodoListWrapper() {
  const [listItems, setListItems] = useState<TodoListItem[]>([
    { name: "Item 0", completed: false },
    { name: "Item 1", completed: true },
    { name: "Item 2", completed: false },
  ]);

  return (
    <>
      <Header />
      <TodoListItemViewer item={listItems[0]} />
    </>
  );
}
