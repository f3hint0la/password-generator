const StrengthMeter = (props) => {
  const passwordCheck = props.password;

  const strengthChecker = () => {
    let strengthValue = 0;
    let regexList = ["[A-Z]", "[a-z]", "[0-9]", "\\W"];
    let strengthText = ["", "Poor", "Weak", "Fair", "Good", "Strong"];

    regexList.forEach((regex) => {
      if (new RegExp(regex).test(passwordCheck)) {
        strengthValue += 1;
      }
    });

    if ((passwordCheck || []).length >= 10) {
      strengthValue += 1;
    }
    return {
      text: strengthText[strengthValue],
      value: strengthValue,
    };
  };

  return (
    <>
      <div className="progress">
        <progress
          className={`password-strength-bar strength-${strengthChecker().text}`}
          value={strengthChecker().value}
        />
      </div>
      <p className={`pwd-label strength-${strengthChecker().text}`}>
        Password strength:
        <strong>{strengthChecker().text}</strong>
      </p>
    </>
  );
};

export default StrengthMeter;
