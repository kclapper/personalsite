import { StrictMode, useCallback, useRef, useState, useEffect } from "react";
import { createRoot } from 'react-dom/client';

import QRCode from './qrcodejs/qrcode.js';

import './QRCode.scss';

import Header from '../components/Header';
import Text from '../components/Text';
import PageContent from '../components/PageContent';

export default function QRCodePage() {
  const qrRef = useRef(false);
  const [error, setError] = useState(false);

  const [inputText, setInputText] = useState("");
  const [size, setSize] = useState(255);

  const [downloadLink, setDownloadLink] = useState("");

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

  const handleChange = useCallback((event) => {
    let newInput = event.target.value;
    if (newInput == "") {
      setError(false);
      setDownloadLink("");
    }
    setInputText(newInput);
  }, [setInputText, error, setError, setDownloadLink]);

  const handleSize = useCallback((event) => {
    setSize(event.target.value);
  }, [setSize]);

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

             <input type="text" 
                    className="mt-4"
                    size="40"
                    value={inputText} 
                    onChange={handleChange}
                    placeholder="Put your text here" />
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
