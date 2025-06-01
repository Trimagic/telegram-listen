# Используем официальный Bun-образ
FROM oven/bun:1.1

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json, lock-файл и tsconfig если есть
COPY package.json bun.lockb* tsconfig.json* ./

# Устанавливаем зависимости
RUN bun install

# Копируем весь остальной код
COPY . .

# Запускаем TypeScript-файл напрямую
CMD ["bun", "run", "index.ts"]
