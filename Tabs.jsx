import "./tabs.css";
import Selectors from "./Selectors";

const Tabs = () => {
  return (
    <>
      <div className="tab-wrapper">
        <div className="tab-content">Study</div>
        <div className="tab-content">Series</div>
        <div className="tab-content">All</div>
      </div>
      <Selectors />
    </>
  );
};
export default Tabs;
