const notifications = document.querySelectorAll(".notification");
const counter = document.querySelector(".logo span");
const unread = document.querySelectorAll(".unread").length;
const readAll = document.querySelector(".mark-as-read");

notifications.forEach((notif) => {
  readAll.addEventListener("click", () => {
    notif.classList.remove("unread");
    notif.classList.add("read");
    const newCount = document.querySelectorAll(".unread");

    counter.innerText = newCount.length;
  });
  action(notif);
});

function action(each) {
  counter.innerText = unread;

  each.addEventListener("click", () => {
    each.classList.remove("unread");
    each.classList.add("read");
    each.classList.toggle("show");

    if (each.classList.contains("read")) {
      const newCount = document.querySelectorAll(".unread");
      counter.innerText -= 1;
      counter.innerText = newCount.length;
    }
  });
}
