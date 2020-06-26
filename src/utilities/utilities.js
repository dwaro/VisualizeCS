const formatData = (raw, type) => {
  let data = raw.split(' ').join('');
  data = data.split(',');

  const val = data[0];

  // if the first value is a number, we'll change to numbers
  if (type === 'number') {
    data = changeToNums(data);
  }

  return data;
};

function changeToNums(data) {
  return data.map((num) => {
    let converted = Number.parseFloat(num);
    if (isNaN(converted)) {
      throw new Error(
        `Data is selected to be numbers, but we failed to convert value: ${num}`
      );
    }
    return converted;
  });
}

exports.formatData = formatData;
