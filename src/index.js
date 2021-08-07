module.exports = function toReadable (number) {
  const unique = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const teen = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let hundred = Math.floor(number/100);
  let remainder = number%100;
  let tens = Math.floor(remainder/10);
  let digit = remainder%10;
  let result = '';
  if (number === 0) {
      result = 'zero';
  } else if (hundred > 0 && remainder < 20) {
      result = `${unique[hundred]} hundred ${unique[remainder]}`
  } else if (hundred === 0 && remainder < 20) {
      result = `${unique[remainder]}`;
  } else if (hundred === 0 && remainder >= 20) {
      result = `${teen[tens-2]} ${unique[digit]}`;
  } else {
      result = `${unique[hundred]} hundred ${teen[tens-2]} ${unique[digit]}`;
  }
  return result.trim()
}
