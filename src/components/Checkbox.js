import { useCallback } from "react";

const CheckBox = (props) => {
  const handleChange = useCallback(
    (evt) => {
      const settings = { ...props.setting };
      settings[props.id] = evt.target.checked;
      props.setSetting(settings);
    },
    [props]
  );
  return (
    <div className="customSettings">
      <div className="settings">
        <p>{props.text}</p>
        <label htmlFor={props.text}>
          <input
            type="checkbox"
            defaultChecked={props.setting[props.id] ?? false}
            id={props.text}
            value=""
            onChange={handleChange}
          />
          <span></span>
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
