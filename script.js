const codeLine = document.querySelector('.code-line');
const texts = [
"LIFE® [Version 10.0.19045.3693]",
"(c) LIFE Corporation. All rights reserved.",
"Acil Durum Notu Yükleniyor",
"---------------------------",
  "Merhaba!",
  "Aslında nereden başlayacağımı bilmiyorum.",
  "Bizi hatırlıyor musun ?",
  "2 yıl önce bir kaza geçirdin.",
  "Kim olduğunu, ne yaptığını kısacası seni sen yapan herşeyi unuttun.",
  "Yeniden uyandığında farklı biriydin.",
  "Bu yüzden bedenini uyutup, zihnini kendi dünyasında serbest bırakmaya karar verdik.",
  "Böylece kendinle yüzleşip, kaybettiğin kişiliğini yeniden bulabilirdin.",
  "Bu notları okuyana kadar yaşadığın her şey kendi hayal gücünden ibaretti.",
  "Şuanda 2019 yılındayız.",
  "Uyanmaya hazır olduğunda,gerçek dünyada bekliyor olacağız.",
  
];

let textIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (textIndex < texts.length) {
    if (charIndex < texts[textIndex].length) {
      codeLine.textContent += texts[textIndex][charIndex];
      charIndex++;
      setTimeout(typeWriter, 50);
    } else {
      codeLine.textContent += '\n'; // Alt satıra geçiş
      textIndex++;
      charIndex = 0;
      setTimeout(typeWriter, 1000); // Yeni satıra geçmeden önce bekleme süresi
    }
  }
}

typeWriter();
