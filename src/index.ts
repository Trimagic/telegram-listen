import TelegramBot from "node-telegram-bot-api";
import { serve } from "@hono/node-server";
import { Hono } from "hono";

// === Настройка бота ===
const token = "7947457663:AAG0qMMKI7em6fNgpsekto0xDkbDVmJJ-po"; // 🔒 вставь сюда свой токен
const bot = new TelegramBot(token, { polling: true });

console.log("🤖 Бот запущен через Bun...");

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text || "";

  console.log(`[${chatId}] ${msg.from?.username || "кто-то"}: ${text}`);

  if (text.startsWith("/ban")) {
    await bot.sendMessage(chatId, "Банхаммер активирован! 🔨");
    // здесь можно добавить kickChatMember, если бот — админ
  }
});

// === Hono-сервер ===
const app = new Hono();

app.get("/", (c) => {
  return c.text("Hono работает ✅, бот тоже!");
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`🌐 Сервер доступен по http://localhost:${info.port}`);
  }
);
