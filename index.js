
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
