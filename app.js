const form = document.querySelector("#form");

const bot = {
  token: "5688569060:AAENDgulCVKkYOnOLGbEtTIHJYtTXyXP-xQ",
  chatId: "-873608366",
};
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const message = document.querySelector("#text");

  fetch(
    `https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chatId}&text=${message.value}`,
    {
      method: "GET",
    })
    // .then(success =>)
});
