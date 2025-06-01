import TelegramBot from "node-telegram-bot-api";

const token = "7947457663:AAG0qMMKI7em6fNgpsekto0xDkbDVmJJ-po"; // вставь свой токен
const bot = new TelegramBot(token, { polling: true });

console.log("🤖 Бот запущен через Bun...");
console.log("Hello via Bun!");

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text || "";

  console.log(`[${chatId}] ${msg.from?.username || "кто-то"}: ${text}`);

  if (text.startsWith("/ban")) {
    await bot.sendMessage(chatId, "Банхаммер активирован! 🔨");
    // тут можно реализовать удаление или бан, если бот — админ
  }
});
