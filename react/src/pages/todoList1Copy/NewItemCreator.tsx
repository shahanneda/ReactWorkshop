import { useState } from "react";
import styles from "./index.module.css";

type NewItemCreatorProps = {
  createElement: (itemName: string) => void;
};

export function NewItemCreator({ createElement }: NewItemCreatorProps) {
  const [currentText, setCurrentText] = useState("");
  return (
    <div className={styles.itemCreatorWrapper}>
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
