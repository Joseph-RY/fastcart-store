# 🛒 FastCart

Интернет-магазин, созданный на современном стеке: **React**, **Vite**, **Redux Toolkit** и **Shadcn/UI**.

## 🚀 Стек технологий

- ⚛️ **React** — библиотека для построения пользовательских интерфейсов.
- ⚡ **Vite** — быстрый сборщик и dev-сервер.
- 🧠 **Redux Toolkit** — упрощённое управление глобальным состоянием.
- 🎨 **Shadcn/UI** — современная коллекция компонентов на базе Radix UI и Tailwind CSS.

## 📦 Установка и запуск

```bash
# 1. Клонируйте репозиторий
git clone https://github.com/your-username/fastcart-react-redux-shadcn.git
cd fastcart-react-redux-shadcn

# 2. Установите зависимости
npm install

# 3. Запустите проект
npm run dev
```

## 📁 Структура проекта

```
src/
├── app/            # Redux store и глобальные настройки
├── pages/          # Страницы приложения (по FSD)
├── widgets/        # Компоненты страниц
├── features/       # Фичи (по FSD)
├── shared/         # Переиспользуемые компоненты, UI, утилиты
└── entities/       # Сущности (продукты, пользователи и т.д.)
```

## 🧩 Компоненты Shadcn

Компоненты UI добавляются через CLI:

```bash
npx shadcn-ui@latest add button
```

Подробнее см. [https://ui.shadcn.com](https://ui.shadcn.com)

## 🛠 Команды

| Скрипт            | Назначение                    |
|-------------------|-------------------------------|
| `npm run dev`     | Запуск в режиме разработки    |
| `npm run build`   | Сборка проекта                |
| `npm run preview` | Предпросмотр production-сборки |

## 📌 TODO

- [ ] Аутентификация
- [ ] Каталог товаров
- [ ] Фильтрация и поиск
- [ ] Корзина
- [ ] Оформление заказа

---

© 2025 FastCart. Сделано с ❤️ на React + Vite.
