import "./box.css";
import Tabs from "./Tabs";

const Box = () => {
  return (
    <>
       <div className="box-wrapper">
        <div className="content-wrapper">
          <div>Study and series DICOM info</div>
          <div className="close">X</div>
        </div>
        <Tabs/>
      </div> 
    </>
  );
};
export default Box;
