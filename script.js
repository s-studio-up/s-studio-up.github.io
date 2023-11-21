const codeLine = document.querySelector('.code-line');
const cursor = document.querySelector('.cursor');

const texts = [
    "Merhaba!",
  "Aslında nereden başlayacağımı bilmiyorum",
  "Beni hatırlıyor musun ?",
  "2 yıl önce bir kaza geçirdin.",
  "Kim olduğunu, ne yaptığını kısacası seni sen yapan herşeyi unuttun",
  "Yeniden uyandığında...",
  "...",
  "...farklı biriydin.",
  "Bu yüzden bedenini uyutup, zihnini kendi dünyasında serbest bırakmaya karar verdik.",
  "Böylece kendinle yüzleşip, kaybettiğin kişiliğini yeniden bulabilirdin.",
  "Bu notları okuyana kadar yaşadığın her şey kendi hayal gücünden ibaretti.",
  "Şuanda 2019 yılındayız.",
  "Uyanmaya hazır olduğunda,",
  "gerçek dünyada bekliyor olacağız.",
  
];

let textIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (textIndex < texts.length) {
    if (charIndex <= texts[textIndex].length) {
      codeLine.textContent = texts[textIndex].slice(0, charIndex);
      charIndex++;
      setTimeout(typeWriter, 100);
    } else {
      setTimeout(eraseText, 1000);
    }
  } else {
    textIndex = 0;
  }
}

function eraseText() {
  if (charIndex >= 0) {
    const text = texts[textIndex].slice(0, charIndex);
    codeLine.textContent = text;
    charIndex--;
    setTimeout(eraseText, 50);
  } else {
    textIndex++;
    charIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

typeWriter();
