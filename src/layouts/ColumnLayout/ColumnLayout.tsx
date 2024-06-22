import { Column } from "../../components/Column";

export function ColumnLayout() {
  return (
    <div className="bg-grey-100 flex gap-6 pl-6">
      <Column />
      <Column />
      <div className="flex justify-center items-center w-[280px] h-[812px] bg-grey-200 px-6 mt-[15px]">
        <p>+ New Column</p>
      </div>
    </div>
  );
}
