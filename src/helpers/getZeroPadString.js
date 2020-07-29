function getZeroPadString(number, stack = 1) {
  const remainStack = stack - 1;
  const fn =
    remainStack > 0 ? (i) => getZeroPadString(i, remainStack) : (i) => i;

  return number.toString().replace(/([0-9]*)?([0-9])$/g, function (_, $1, $2) {
    return `${fn($1 || 0)}${$2}`;
  });
}

export default getZeroPadString;
