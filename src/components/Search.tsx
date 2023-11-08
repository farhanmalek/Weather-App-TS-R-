import { ChangeEvent } from "react";
import { optionType } from "../types";

type Props = {
    term: string,
    dropdown: [],
    onInputChange: (e:ChangeEvent<HTMLInputElement>) => void,
    onOptionSelect: (option: optionType) => void,
    onSubmit: () => void;
}

function Search({
  term,
  dropdown,
  onInputChange,
  onOptionSelect,
  onSubmit,
}:Props): JSX.Element {
  return (
    
      <div className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700">
        <p className="text-4xl font-thin">
          Weather <span className="font-black">Forecast</span>
        </p>

        <p className="text-sm mt-2">Enter Location:</p>
        <div className="relative flex mt-10 md:mt-4">
          <input
            type="text"
            onChange={onInputChange}
            value={term}
            className="px-2 py-1 rounded-1-md border-2 border-white"
          />
          <ul className="absolute top-9 bg-white m1-1 rounded-b-md">
            {dropdown.map((option: optionType, index: number) => (
              <li key={option.name + "-" + index}>
                <button
                  className="text-left text-sm w0full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
                  onClick={() => onOptionSelect(option)}
                >
                  {option.name}
                </button>
              </li>
            ))}
          </ul>
          <button
            className="rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500  text-zinc-100 px-2 py-1 cursor-pointer"
            onClick={onSubmit}
          >
            Search
          </button>
        </div>
      </div>
  );
}

export default Search;
