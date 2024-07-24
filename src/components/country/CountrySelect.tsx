import countries from "i18n-iso-countries";
import Select from "react-select";
import {
  CountrySelectOption,
  CountryValueContainer,
} from "./CountrySelectOption";

// Register countries
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

// --- TASK G ---
// Please replace "any" with a proper type in this file (and where it is needed).

// Props
interface CountrySelectProps {
  value?: any;
  onChange?: (value: { code: string; name: string }) => void;
}

// Constants
export const DEFAULT_COUNTRY = {
  code: "US",
  name: "United States of America",
};

// Component
export const CountrySelect = ({
  value = DEFAULT_COUNTRY,
  onChange,
}: CountrySelectProps) => {
  // Prepare Data
  const data = Object.entries(
    countries.getNames("en", { select: "official" })
  ).map(([code, name]) => {
    return {
      value: { code, name },
      label: name,
    };
  });
  const defaultValue = { value: value, label: value.name };
  // Render

  return (
    <div>
      <label>
        Country
        <Select
          options={data}
          components={{
            Option: CountrySelectOption,
            ValueContainer: CountryValueContainer,
          }}
          defaultValue={defaultValue}
          onChange={(newValue: any) => {
            onChange && onChange(newValue.value);
          }}
        />
      </label>
    </div>
  );
};

export default CountrySelect;
