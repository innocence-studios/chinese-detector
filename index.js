/*
let audio = document.createElement('audio');
audio.src = 'https://audio.jukehost.co.uk/jPp36llbKw9eu0CNQrVhRNq0ManDPRZT';
document.body.appendChild(audio);

const content = document.body.innerHTML;
const checked = [];
let isChinese = false;
for (let char of content) {
  if (checked.includes(char) || char.trim() == '') continue;
  if (isInRange(char.charCodeAt(0).toString(16).toUpperCase(), 0x4E00, 0x9FFF)) isChinese = true;
  checked.push(char);
};

let played = false;
document.addEventListener('click', async () => {
  if (played || !isChinese) return;
  played = true;
  await audio.play();
});

function isInRange(value, lower, upper) {
  value = parseInt(value, 16);
  return value >= lower && value <= upper;
};
*/

const audio = new Audio('https://audio.jukehost.co.uk/dMHGd05PDPFPKHXpXvYmz8OJponnhlS4');
document.body.appendChild(audio);

const content = document.body.textContent.trim();
const checked = new Set();
let isChinese = false;

for (const char of content) {
  if (!char.trim() || checked.has(char)) continue;
  const charCode = char.charCodeAt(0);
  if (charCode >= 0x4E00 && charCode <= 0x9FFF) isChinese = true;
  checked.add(char);
};

let played = false;
setInterval(() => {
  if (played || !isChinese) return;
  played = true;
  audio.play()
    .then(console.log('我在北京 😎'))
    .catch(() => { played = false });
});

