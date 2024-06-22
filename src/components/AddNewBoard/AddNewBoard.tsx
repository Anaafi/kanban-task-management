import { useState, ChangeEvent, FormEvent } from "react";
import { AddNewBoardForm } from "../AddNewBoardForm/AddNewBoardForm";

export function AddNewBoard() {
  const [formState, setFormState] = useState({
    name: "",
    columns: [""],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleColumnChange = (index: number, value: string) => {
    const newColumns = [...formState.columns];
    newColumns[index] = value;
    setFormState((prevState) => ({
      ...prevState,
      columns: newColumns,
    }));
  };

  const addColumn = () => {
    setFormState((prevState) => ({
      ...prevState,
      columns: [...prevState.columns, ""],
    }));
  };

  const removeColumn = (index: number) => {
    const newColumns = formState.columns.filter((_, i) => i !== index);
    setFormState((prevState) => ({
      ...prevState,
      columns: newColumns,
    }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-white w-[480px] h-[675px] m-auto rounded-lg pt-8">
      <p className="px-8">Add New Board</p>
      <AddNewBoardForm
        formState={formState}
        handleChange={handleChange}
        handleColumnChange={handleColumnChange}
        addColumn={addColumn}
        removeColumn={removeColumn}
        onSubmit={onSubmit}
        isLoading={false}
      />
    </div>
  );
}
