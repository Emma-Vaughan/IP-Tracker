import Name from "./Components/Name";
import Search from "./Components/Search";
import MiddleBar from "./Components/MiddleBar";

function MainHeader({ data, setData }) {
  return (
    <div className="headerImage">
      <Name />
      <Search setData={setData} />
      <MiddleBar data={data} />
    </div>
  );
}

export default MainHeader;
