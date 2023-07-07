import { ChangeEvent, FC } from "react";

type InputFormProps = {
  onChange: (e?: ChangeEvent<HTMLInputElement>) => void;
  onClick: (text: string) => void;
  value?: string | any;
};
export const InputForm: FC<InputFormProps> = ({ onChange, onClick, value }) => {
  return (
    <div className="input-form">
      <h1>Undo and Redo</h1>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter any text"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            if (value) onClick(value);
          }
        }}
      />
      <button
        onClick={(e) => {
          onClick(value);
        }}
        disabled={!value}
      >
        Add new text
      </button>
    </div>
  );
};
