import { Button } from "../Button";

export function EmptyState() {
  return (
    <div className="w-full h-screen flex justify-center bg-grey-100">
      <div className="flex flex-col items-center justify-center gap-8">
        <p className="text-grey-1000">
          This board is empty. Create a new column to get started.
        </p>
        <Button
          className="w-[180px] text-[15px] rounded"
          children="+ Add New Column"
        />
      </div>
    </div>
  );
}
