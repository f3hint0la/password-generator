import CheckBox from "./Checkbox";

const CheckBoxes = (props) => {
  return (
    <div>
      <CheckBox
        text="Lowercase"
        id="lowerCase"
        setSetting={props.setSetting}
        setting={props.setting}
      />

      <CheckBox
        text="Uppercase"
        id="upperCase"
        setSetting={props.setSetting}
        setting={props.setting}
      />

      <CheckBox
        text="Number"
        id="number"
        setSetting={props.setSetting}
        setting={props.setting}
      />

      <CheckBox
        text="Symbol"
        id="symbol"
        setSetting={props.setSetting}
        setting={props.setting}
      />
    </div>
  );
};

export default CheckBoxes;
