import { FaRedo } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import generatePassword from "./password";
import { useState, useCallback } from "react";
import CheckBoxes from "./Checkboxes";
import toast, { Toaster } from "react-hot-toast";
import StrengthMeter from "./StrengthMeter";

function Generator() {
  const [password, setPassword] = useState();
  const [length, setLength] = useState(12);
  const [copy, setCopy] = useState("");
  const [strength, setStrength] = useState(false);
  const [setting, setSetting] = useState({
    lowerCase: true,
    upperCase: true,
    number: false,
    symbol: false,
  });

  const error = (message) => {
    toast.error(message, {
      position: "top-center",
      duration: 3000,
      ariaProps: {
        role: "alert",
        "aria-live": "polite",
      },
    });
  };

  const success = (message) => {
    toast.success(message, {
      position: "top-center",
      duration: 3000,
      ariaProps: {
        role: "alert",
        "aria-live": "polite",
      },
    });
  };

  const handleLengthChange = useCallback(
    (value) => {
      setLength(value);
    },
    [setLength]
  );

  const createPassword = useCallback(() => {
    if (length < 8 || length > 30) {
      setPassword(null);
      error("Please choose length between 8 and 20");
    } else if (
      setting.lowerCase === false &&
      setting.upperCase === false &&
      setting.number === false &&
      setting.symbol === false
    ) {
      setPassword(null);
      error("You must select at least one option");
    } else {
      setPassword(null);
      setPassword(generatePassword(length, setting));
    }
  }, [setPassword, length, setting]);

  const handleCopyPassword = (e) => {
    if (!password) {
      error("Nothing to copy. Sorry!");
    } else {
      success("Successfully Copied!");
    }
  };

  const handleStrength = () => {
    setStrength(true);
  };

  return (
    <div className="wrapper">
      <div className="generator">
        <div className="generated">
          <div className="password">{password}</div>
          <CopyToClipboard
            text={password}
            copy={copy}
            onCopy={() => {
              setCopy({ copied: true });
            }}
          >
            <button
              className="copy-btn"
              onClick={() => {
                handleCopyPassword();
              }}
            >
              <FaCopy />
            </button>
          </CopyToClipboard>

          <button
            className="redo-btn"
            onClick={() => {
              createPassword();
              handleStrength();
            }}
          >
            <FaRedo />
          </button>
        </div>
        {strength && <StrengthMeter password={password} />}

        <div className="config">
          <div className="customization">
            <div className="heading">Customize your password</div>

            <div className="passwordLength">
              <button
                className="lengthButton"
                onClick={() => {
                  if (Number(length) - 1 >= 8) {
                    const newLength = Number(length) - 1;
                    setLength(newLength);
                  }
                }}
              >
                <span>-</span>
              </button>

              <input
                type="text"
                id="amount"
                name="amount"
                max={30}
                min={8}
                value={length}
                onChange={(e) => {
                  handleLengthChange(e.target.value);
                }}
                onBlur={(e) => {
                  let value = parseInt(e.target.value);
                  handleLengthChange(value);
                }}
              />

              <button
                className="lengthButton"
                onClick={() => {
                  if (Number(length) + 1 <= 30) {
                    const newLength = Number(length) + 1;
                    setLength(newLength);
                  }
                }}
              >
                <span>+</span>
              </button>
            </div>

            <CheckBoxes setting={setting} setSetting={setSetting} />
          </div>
          <button
            className="generate-btn"
            type="button"
            onClick={() => {
              createPassword();
              handleStrength();
            }}
          >
            Generate
          </button>
        </div>
      </div>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          ariaLive: "polite",
        }}
      />
    </div>
  );
}

export default Generator;
