function MiddleBar({ data }) {
  if (data === "") {
    return (
      <div className="middleBar">
        <div className="IP">
          <h3>IP ADDRESS</h3>
        </div>
        <hr width="1" size="75" />
        <div className="location">
          <h3>LOCATION</h3>
        </div>
        <hr width="1" size="75" />
        <div className="timezone">
          <h3>TIMEZONE</h3>
        </div>
        <hr width="1" size="75" />
        <div className="ISP">
          <h3>ISP</h3>
        </div>
      </div>
    );
  }

  const ipAddress = data.ip;
  const city = data.location.city;
  const location = data.location.country;
  const postcode = data.location.postalCode;
  const timezone = data.location.timezone;
  const ISP = data.isp;

  return (
    <div className="middleBar">
      <div className="IP">
        <h3>IP ADDRESS</h3>
        <p>{ipAddress}</p>
      </div>
      <hr width="1" size="75" />
      <div className="location">
        <h3>LOCATION</h3>
        <p>
          {city}, {location} {postcode}
        </p>
      </div>
      <hr width="1" size="75" />
      <div className="timezone">
        <h3>TIMEZONE</h3>
        <p>{timezone}</p>
      </div>
      <hr width="1" size="75" />
      <div className="ISP">
        <h3>ISP</h3>
        <p>{ISP}</p>
      </div>
    </div>
  );
}

export default MiddleBar;
