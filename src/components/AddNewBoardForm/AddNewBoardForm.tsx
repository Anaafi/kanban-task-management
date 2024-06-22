import React from "react";
import { Button } from "../Button";
import { Input } from "../Input";

type TaskFormProps = Readonly<{
  formState: {
    name: string;
    columns: string[];
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleColumnChange: (index: number, value: string) => void;
  addColumn: () => void;
  removeColumn: (index: number) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}>;

export function AddNewBoardForm({
  formState,
  handleChange,
  handleColumnChange,
  addColumn,
  removeColumn,
  onSubmit,
  isLoading,
}: TaskFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white py-10 px-8 rounded-lg max-w-[528px] w-full flex flex-col gap-6"
    >
      <Input
        className="text-grey-1000"
        label="Name"
        id="name"
        type="text"
        name="name"
        value={formState.name}
        onChange={handleChange}
      />

      <div>
        <label className="block text-sm text-grey-1000">Columns</label>
        {formState.columns.map((column, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <input
              type="text"
              value={column}
              onChange={(e) => handleColumnChange(index, e.target.value)}
              className="border rounded-lg px-3 py-2 w-full"
            />
            <button
              type="button"
              onClick={() => removeColumn(index)}
              className="text-grey-1000"
            >
              &#x2715;
            </button>
          </div>
        ))}
        <Button variant="secondary" type="button" onClick={addColumn}>
          + Add New Column
        </Button>
      </div>

      <Button isLoading={isLoading}>Create New Board</Button>
    </form>
  );
}
