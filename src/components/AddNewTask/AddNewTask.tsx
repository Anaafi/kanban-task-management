import { useState, ChangeEvent, FormEvent } from "react";
import { AddNewTaskForm } from "../AddNewTaskForm";

export function AddNewTask() {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    subtasks: [""],
    status: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubtaskChange = (index: number, value: string) => {
    const subtasks = [...formState.subtasks];
    subtasks[index] = value;
    setFormState((prevState) => ({
      ...prevState,
      subtasks,
    }));
  };

  const addSubtask = () => {
    setFormState((prevState) => ({
      ...prevState,
      subtasks: [...prevState.subtasks, ""],
    }));
  };

  const removeSubtask = (index: number) => {
    setFormState((prevState) => {
      const subtasks = prevState.subtasks.filter((_, i) => i !== index);
      return {
        ...prevState,
        subtasks,
      };
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-white w-[480px] h-[600px] m-auto rounded-lg overflow-y-auto pt-8">
      <p className="px-8">Add New Task</p>
      <AddNewTaskForm
        formState={formState}
        handleChange={handleChange}
        handleSubtaskChange={handleSubtaskChange}
        addSubtask={addSubtask}
        removeSubtask={removeSubtask}
        onSubmit={onSubmit}
        isLoading={false}
      />
    </div>
  );
}
