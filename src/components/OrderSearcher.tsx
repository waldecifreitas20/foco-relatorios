import { useContext, useState } from "react";
import { OrderContext } from "../provider/OrderContext";
import { Dropdown, type DropdownOption } from "./Dropdown";

interface OrderSearcherProps {
  name: string;
  initialValue?: string;
  label?: string;
  required?: boolean;
  blocked?: boolean
  onSelect: (option: any) => void;
}

export function OrderSearcher(props: OrderSearcherProps) {
  const [inputValue, setInputValue] = useState(props.initialValue);
  const [showDropdown, setShowDropdown] = useState(false);
  const [options, setOptions] = useState<DropdownOption[]>([]);

  const { getOrders } = useContext(OrderContext);

  async function handleInputChange(evt: any) {
    const value = evt.target.value;

    setShowDropdown(() => value.length > 0);
    setInputValue(value);

    const orders = await getOrders().then((orders) =>
      orders.filter((o) => o.protocol.includes(value))
    );

    setOptions(() => {
      return orders.map((o) => ({
        label: `${o.protocol} - ${o.plate} - ${o.service}`,
        value: o.protocol,
      }));
    });
  }


  function handleSelectOption(option: DropdownOption) {
    setShowDropdown(false);
    setInputValue(option.value);
    props.onSelect(option.value);
  }


  return (
    <div className="w-full relative">
      {props.label && (
        <p>
          {props.label}
          {props.required && <span className="text-red-500">*</span>}:
          {props.blocked && <i className="ml-1 fa-solid fa-lock fa-xs"></i>}
        </p>
      )}
      <input
        type="text"
        name={props.name}
        className={`
        
        border border-slate-200 
        w-full block 
        px-4 py-2 rounded-[var(--border-radius)] 
        outline-none
        focus:border-[var(--primary)]
        ${props.blocked ? "bg-slate-100": "bg-white"}
        `}
        value={inputValue}
        readOnly={props.blocked}
        onChange={handleInputChange}
      />

      {showDropdown && (
        <Dropdown onClickOption={handleSelectOption} options={options} />
      )}
    </div>
  );
}
