const formatData = (raw) => {
  let data = raw.split(' ').join('');
  data = data.split(',');

  const val = data[0];

  // if the first value is a number, we'll change to numbers
  if (!isNaN(val)) data = changeToNums(data);

  return data;
};

function changeToNums(data) {
  return data.map((num) => Number.parseFloat(num));
}

exports.formatData = formatData;
