const Block = ({ epoch, minTemp, maxTemp, condition, icon }) => {
  const lastUpdatedEpoch = epoch;
  const lastUpdatedDate = new Date(lastUpdatedEpoch * 1000);
  const dayOfWeek = lastUpdatedDate.toLocaleString("en-US", {
    weekday: "long",
  });

  return (
    <div>
      <div>
        <h3>{dayOfWeek}</h3>
        <h3>{minTemp}</h3>
        <h3>{maxTemp}</h3>
      </div>
      <h2>{condition}</h2>
      <img src={icon} alt="" />
    </div>
  );
};
export default Block;
