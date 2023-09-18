import "./selectors.css";
import { useState, useRef } from "react";
import Api from "./Api";

const Selectors = () => {
  const [first, setfirst] = useState(Api);
  const [values, setValues] = useState([]);
  const selectValue = useRef(null);
  const seriesList = Object.keys(first);

  function handelChange() {
    let abc = Object.values(first[selectValue.current.value]);
    setValues(abc);
  }

  return (
    <>
      <div className="selector-wrapper">
        <input type="text" placeholder="Search" className="searchbar"/>
        <select
          name="study"
          className="selector-one"
          onChange={() => handelChange()}
          ref={selectValue}
        >
          {seriesList.map((listValues, index) => {
            return (
              <option value={listValues} key={index}>
                {listValues}
              </option>
            );
          })}
        </select>
        <input type="text" placeholder="Search" className="searchbar" />
      </div>
      <div>
        <table>
          <tbody>
            {values.map((item, index) => (
              <tr key={index}>
                <td>
                  {Object.entries(item).map(([key, value]) => (
                    <p key={key}>
                      <div className="values-wrapper">
                        <div className="panelvalue">{key} </div>
                        <div className="panelvalue">{value}</div>
                      </div>
                    </p>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Selectors;
