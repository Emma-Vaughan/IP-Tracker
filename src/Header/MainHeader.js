import Name from "./Components/Name";
import Search from "./Components/Search";
import MiddleBar from "./Components/MiddleBar";

function MainHeader() {
  return (
    <div className="headerImage">
      <Name />
      <Search />
      <MiddleBar />
    </div>
  );
}

export default MainHeader;
