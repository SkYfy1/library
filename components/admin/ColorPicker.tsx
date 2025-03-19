import { HexColorInput, HexColorPicker } from "react-colorful";

interface Props {
  value?: string;
  onPickerChange: (color: string) => void;
}

const ColorPicker = ({ value, onPickerChange }: Props) => {
  return (
    <div className="relative flex flex-col gap-2">
      <HexColorPicker color={value} onChange={onPickerChange} />
      <div className="flex items-center">
        <div className="book-form_input rounded-md flex gap-1 items-center w-full">
          <p>#</p>
          <HexColorInput
            color={value}
            onChange={onPickerChange}
            className="hex-input"
          />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
