const btn = document.querySelector(".btn");
const teks = document.getElementById("teks");
const listContainer = document.querySelector(".list");

teks.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    if (teks.value === "") {
      alert("jangan kosongin bro");
      listContainer.removeChild(listItem);
    } else {
      setTimeout(() => {
        teks.value = "";
      }, 0);
      return tampilkanTulisan();
    }
  }
});
btn.addEventListener("click", function () {
  if (teks.value === "") {
    alert("jangan kosongin bro");
    listContainer.removeChild(listItem);
  } else {
    setTimeout(() => {
      teks.value = "";
    }, 0);
    return tampilkanTulisan();
  }
});

function tampilkanTulisan() {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<p>${teks.value}</p>`;
  listContainer.appendChild(listItem);
  listItem.classList.add("item");

  function hapusText() {
    listItem.onclick = () => {
      listItem.classList.toggle("del");
      listItem.classList.toggle("border");
    };
    return;
  }
  hapusText();
  function tombolHapus() {
    const icon = document.createElement("button");
    icon.innerHTML = "X";
    listItem.appendChild(icon);

    icon.onclick = () => {
      listItem.style.display = "none";
    };
  }
  return tombolHapus();
}
