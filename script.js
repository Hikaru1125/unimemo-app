let descriptions = {};

fetch("data.json", { cache: "no-store" })
  .then(res => res.json())
  .then(data => {
    descriptions = data;
    document.getElementById('searchButton').addEventListener('click', searchNumber);
  });

function searchNumber() {
  const input = document.getElementById("numberInput").value;
  const item = descriptions[input];

  if (item) {
    document.getElementById("title").textContent = `No. ${input}`;
    const img = document.getElementById("image");
    img.src = `images/${input}.png`; // N.png 形式に修正
    img.onerror = function() {
      img.onerror = null;
      img.src = "images/noimage.png";
    };
    document.getElementById("description").innerHTML = `
      <strong>【成立役】</strong> ${item.役}<br>
      <strong>【押し順・押し位置】</strong> ${item.押し順}<br>
      <strong>【解説】</strong> ${item.解説}
    `;
  } else {
    document.getElementById("title").textContent = "見つかりません";
    const img = document.getElementById("image");
    img.src = "images/noimage.png";
    img.onerror = null;
    document.getElementById("description").textContent = "その番号に対応する情報がありません。";
  }
}
