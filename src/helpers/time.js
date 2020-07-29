export function getTimesFromMillis(source) {
  const timeUnits = [
    ["millis", 1000],
    ["seconds", 60],
    ["minutes", 60],
    ["hours", 24],
    ["days", 7],
    ["weeks", 52],
    ["years"],
  ];

  return timeUnits.reduce((acc, [unitKey, unitValue]) => {
    if (unitValue) {
      const value = source % unitValue;
      source = (source - value) / unitValue;
      return Object.assign({}, acc, { [unitKey]: value });
    }
    return Object.assign({}, acc, { [unitKey]: source });
  }, {});
}
