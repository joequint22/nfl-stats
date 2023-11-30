import { ChangeEventHandler } from "react";

type TUserInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

export default function UserInput(props: TUserInputProps) {
  return (
    <>
      <div className="">
        <form className="border border-white/50 rounded-lg overflow-hidden" action="/">
          <div 
            className="bg-slate-950"
            >
            <input
              placeholder="Player name"
              className={
                ` bg-transparent rounded-lg text-white  outline-white/80 p-2 pl-3` +
                props.className
              }
              type="text"
              value={props.value}
              onChange={props.onChange}
            />
            <button type="submit" className="px-4 ">
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
