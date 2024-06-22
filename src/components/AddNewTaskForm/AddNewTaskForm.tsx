import { Button } from "../Button";
import { Input } from "../Input";

type TaskFormProps = Readonly<{
  formState: {
    title: string;
    description: string;
    subtasks: string[];
    status: string;
  };
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  handleSubtaskChange: (index: number, value: string) => void;
  addSubtask: () => void;
  removeSubtask: (index: number) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}>;

export function AddNewTaskForm({
  formState,
  handleChange,
  handleSubtaskChange,
  addSubtask,
  removeSubtask,
  onSubmit,
  isLoading,
}: TaskFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="bg-white py-10 px-8  rounded-lg max-w-[528px] w-full flex flex-col gap-6"
    >
      <Input
        className="text-grey-1000"
        label="Title"
        id="title"
        type="text"
        name="title"
        value={formState.title}
        onChange={handleChange}
      />
      <div>
        <label htmlFor="description" className="block text-sm  text-grey-1000">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formState.description}
          onChange={handleChange}
          rows={4}
          className="border rounded-lg px-3 py-2 w-full"
        />
      </div>
      <div>
        <label className="block text-sm  text-grey-1000">Subtasks</label>
        {formState.subtasks.map((subtask, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <input
              type="text"
              value={subtask}
              onChange={(e) => handleSubtaskChange(index, e.target.value)}
              className="border rounded-lg px-3 py-2 w-full"
            />
            <button
              type="button"
              onClick={() => removeSubtask(index)}
              className="text-grey-1000 "
            >
              &#x2715;
            </button>
          </div>
        ))}
        <Button variant="secondary" type="button" onClick={addSubtask}>
          + Add new subtask
        </Button>
      </div>
      <div>
        <label htmlFor="status" className="block text-sm  text-grey-1000">
          Status
        </label>
        <select
          id="status"
          name="status"
          value={formState.status}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 w-full"
        >
          <option value="">Select status</option>
          <option value="todo">To Do</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <Button isLoading={isLoading}>Create Task</Button>
    </form>
  );
}
