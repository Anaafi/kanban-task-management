import { Taskcard } from "../TaskCard";
export function Column() {
  return (
    <div className="flex flex-col gap-5 pt-6">
      <div className="flex items-center gap-4">
        <div className="bg-grey-1000 w-[14px] h-[14px]  rounded-full"></div>
        <p>TODO (4)</p>
      </div>
      <Taskcard />
      <Taskcard />
    </div>
  );
}
