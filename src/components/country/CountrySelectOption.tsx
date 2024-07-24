import { OptionProps, ValueContainerProps } from "react-select";

/* --- [TASK] ---
Country flags in select field

CURRENT SCENARIO
- The `CountrySelect` displays only the names of the countries.

DESIRED SCENARIO
- The `CountrySelect` displays the corresponding country flag next to the title.
- Flags are visible in both the options and the input field, drawing inspiration from this example:

FURTHER DETAILS
- No expectation to alter the dimensions of the select field, though it's optional.
- Implement a well-considered layout strategy.
- Retrieve flag icons from:
    `https://catamphetamine.gitlab.io/country-flag-icons/3x2/<ISO_CODE>.svg` (codes are in uppercase)
- Note that the `'i18n-iso-countries'` package in use already contains the compatible codes.
- Flags appearing on the `SettingsSelector`-Button is optional
--- [TASK] --- */

// Component
const icon_url = "http://purecatamphetamine.github.io/country-flag-icons/3x2/";
export const CountrySelectOption = (props: OptionProps<any>) => {
  const { innerProps, innerRef }: any = props;
  return (
    <div className="flex gap-2 m-2 hover:bg-gray-200 p-2 ">
      <div className="overflow-hidden w-5">
        <img
          alt={props.data.label}
          src={`${icon_url}${props.data.value.code}.svg`}
          className="w-full h-full"
        />
      </div>
      <option ref={innerRef} {...innerProps} >
        <div></div>
        <span>{props.data.label}</span>
      </option>
    </div>
  );
};

export const CountryValueContainer = (props: ValueContainerProps<any>) => {
  const value = props.getValue()[0];
  return (
    <div className="flex gap-2 items-center px-2">
      <div className="border border-solid overflow-hidden w-5">
        <img
          alt={value.label}
          src={`${icon_url}${value.value.code}.svg`}
          className="w-full h-full"
        />
      </div>
      <span className="w-full">{value.label}</span>
    </div>
  );
};
