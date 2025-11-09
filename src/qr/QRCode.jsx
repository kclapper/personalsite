import { StrictMode, useCallback, useRef, useState, useEffect } from "react";
import { createRoot } from 'react-dom/client';

import QRCode from './qrcodejs/qrcode.js';

import './QRCode.scss';

import Header from '../components/Header';
import Text from '../components/Text';
import PageContent from '../components/PageContent';

function BasicQRInput({onChange, placeholder}) {
  const [value, setValue] = useState("");

  const handleChange = useCallback((event) => {
    let newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  }, [setValue, onChange]);

  return (
    <input type="text" 
          className="mt-4"
          size="40"
          value={value} 
          onChange={handleChange}
          placeholder={placeholder} />
  );
}

function TextQRInput({onChange}) {
  return <BasicQRInput onChange={onChange} placeholder="Put your text here" />;
}

function URLQRInput({onChange}) {
  return <BasicQRInput onChange={onChange} placeholder="Put your link here" />;
}

const shownEye = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg>;
const hiddenEye = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
  <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
</svg>;

function ShowHideButton({onChange}) {
  const [hidden, setHidden] = useState(true);

  const handleClick = useCallback(() => {
    const newValue = !hidden;
    setHidden(newValue);
    onChange(newValue);
  }, [hidden, setHidden]);

  return (
    <button class="btn btn-gray" type="button" onClick={handleClick}>
      { hidden ? shownEye : hiddenEye }
    </button>
  );
}

function WifiQRInput({onChange}) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordInputType, setPasswordInputType] = useState("password");

  const handleChange = useCallback((name, password) => {
    setName(name);
    setPassword(password);

    if (name && password) {
      onChange(`WIFI:S:${name};T:WPA;P:${password};;`);
    }
  }, [setName, setPassword, onChange]);

  const handleName = useCallback((event) => {
    let newName = event.target.value;
    handleChange(newName, password);
  }, [handleChange, password]);

  const handlePassword = useCallback((event) => {
    let newPassword = event.target.value;
    handleChange(name, newPassword);
  }, [handleChange, name]);

  const handleHidden = useCallback((hidden) => {
    setPasswordInputType(hidden ? "password" : "text");
  }, [setPasswordInputType]);

  return (
    <div className="d-flex mt-3">
      <div className="input-group me-2">
        <span className="input-group-text" id="qr-wifi-name-label">
          Wifi Name
        </span>
        <input type="text" 
              className="form-control"
              aria-label="Wifi Name"
              aria-describedby="qr-wifi-name-label"
              value={name} 
              onChange={handleName} />
      </div>

      <div className="input-group">
        <span className="input-group-text" id="qr-wifi-password-label">
          Wifi Password
        </span>
        <input type={passwordInputType} 
              className="form-control"
              aria-label="Wifi Password"
              aria-describedby="qr-wifi-password-label"
              value={password} 
              onChange={handlePassword} />
        <ShowHideButton onChange={handleHidden} />
      </div>
    </div>
  );
}

export default function QRCodePage() {
  const qrRef = useRef(false);
  const [error, setError] = useState(false);

  const [inputText, setInputText] = useState("");
  const [size, setSize] = useState(255);

  const [downloadLink, setDownloadLink] = useState("");

  const [qrCodeInputType, setQRCodeInputType] = useState("URL");

  useEffect(() => {
    if (!qrRef.current) {
      return;
    }

    qrRef.current.innerHTML = "";

    if (!inputText) {
      return;
    }

    setError(false);
    setDownloadLink("");

    try {
      new QRCode(qrRef.current, {
        height : size,
        width : size,
        text : inputText
      });
    } catch (err) {
      console.log(err);
      setError(true);
    }

    let drawing = qrRef.current.querySelector("canvas");
    if (drawing) {
      setDownloadLink(drawing.toDataURL("image/png"));
    }
  }, [inputText, size, qrRef, setError]);

  const handleChange = useCallback((newInput) => {
    if (newInput == "") {
      setError(false);
      setDownloadLink("");
    }
    console.log(newInput);
    setInputText(newInput);
  }, [setInputText, error, setError, setDownloadLink]);

  const handleSize = useCallback((event) => {
    setSize(event.target.value);
  }, [setSize]);

  const handleSelect = useCallback((event) => {
    setQRCodeInputType(event.target.value);
  }, [setQRCodeInputType]);

  let qrCodeInput;
  switch (qrCodeInputType) {
    case "URL":
      qrCodeInput = <URLQRInput onChange={handleChange} />;
      break;
    case "WIFI":
      qrCodeInput = <WifiQRInput onChange={handleChange} />;
      break;
    default:
      qrCodeInput = <TextQRInput onChange={handleChange} />;
      break;
  }

  return <StrictMode>
           <PageContent>
            <h4>
              Generate a QR code for free!
            </h4>
            <Text>
              Type your QR code text (typically a URL) into the box
              and it will create a QR code.
              <br/>
              If you scan a QR code containing a URL, most devices will
              open that website in a browser.
              <br/>
              You can also enter special text formats to create QR codes
              that hold WIFI passwords and other special data.
            </Text>


            <div className="mt-4">
              <select class="form-select" 
                      aria-label="QR Code Type Selector" 
                      value={qrCodeInputType}
                      onChange={handleSelect}>
                <option value="URL">Web link QR Code</option>
                <option value="WIFI">Wifi Login QR Code</option>
                <option value="MISC">Misc. QR Code</option>
              </select>

              { qrCodeInput }
            </div>
            <br/>
            <div className="mb-4 mt-2">
              <label htmlFor="size-range" className="form-label">
                Size
              </label>
              <br/>
              <input type="range"
                    id="size-range"
                    className="form-range w-50"
                    min="50"
                    max="750"
                    value={size}
                    onInput={handleSize} />
              </div>
            {
              error ? 
              <p>
                Looks like something went wrong.
                <br/>
                Please try again
              </p>
              :  
              <div id="qrcode" ref={qrRef}>
              </div>
            }

            {
              downloadLink &&
              <a className="btn btn-primary text-white mt-4" 
                 href={downloadLink} 
                 download="QR Code.png">
                Download
              </a>
            }

           </PageContent>
         </StrictMode>;
}

createRoot(document.getElementById('app')).render(<QRCodePage />);
