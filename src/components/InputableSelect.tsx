import { useContext, useState } from "react";
import { OrderContext } from "../provider/OrderContext";
import { Dropdown, type DropdownOption } from "./Dropdown";

interface InputableSelectProps {
  name: string;
  onSelect: (option: any) => void;
}

export function InputableSelect(props: InputableSelectProps) {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [options, setOptions] = useState<DropdownOption[]>([]);

  const { getOrders } = useContext(OrderContext);

  function handleInputChange(evt: any) {
    const value = evt.target.value;

    setShowDropdown(() => value.length > 0);
    setInputValue(value);

    setOptions(() => {
      const orders = getOrders().filter((o) => o.protocol.includes(value));
      return orders.map((o) => ({
        label: `${o.protocol} - ${o.plate} - ${o.service}`,
        value: o.protocol,
      }));
    });
  }


  function handleSelectOption(option: DropdownOption)  {
    setShowDropdown(false);
    setInputValue(option.value);
    props.onSelect(option.value);
  }


  return (
    <div className="w-full relative">
      <input
        type="text"
        name={props.name}
        className="bg-white
      border border-neutral-200 
      w-full block 
      px-4 py-3 
      shadow-lg rounded-lg 
      outline-none
      focus:border-red-500"
        value={inputValue}
        onChange={handleInputChange}
      />

      {showDropdown && (
        <Dropdown
          onClickOption={handleSelectOption}
          options={options}
        />
      )}
    </div>
  );
}
