function MiddleBar() {
  return (
    <div className="middleBar">
      <div className="IP">
        <h3>IP ADDRESS</h3>
        <p>IP Address</p>
      </div>
      <hr width="1" size="75" />
      <div className="location">
        <h3>LOCATION</h3>
        <p>Location</p>
      </div>
      <hr width="1" size="75" />
      <div className="timezone">
        <h3>TIMEZONE</h3>
        <p>Timezone</p>
      </div>
      <hr width="1" size="75" />
      <div className="ISP">
        <h3>ISP</h3>
        <p>ISP</p>
      </div>
    </div>
  );
}

export default MiddleBar;
