<h1 align="center">
    <a href="https://lectrum.io" target="_blank" rel="noopener noreferrer">
        <img src="./static/favicon/favicon-woodsmoke.svg" alt="Lectrum favicon" width="25" />
    </a>
    Воркшоп по React
</h1>
<br>

<div align="center">
    <!-- Package version -->
    <img src="https://img.shields.io/github/package-json/v/lectrum/react-workshop.svg?longCache=true&style=flat-square"
        alt="Package version" />
    <!-- Last commit -->
    <img src="https://img.shields.io/github/last-commit/lectrum/react-workshop.svg?longCache=true&style=flat-square" alt="Last commit"
    />
    <!-- Dependencies -->
    <img src="https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg?longCache=true&style=flat-square" alt="Dependencies"
    />
    <!-- Contributors welcome -->
    <img src="https://img.shields.io/badge/contributions-welcome-orange.svg?longCache=true&style=flat-square" alt="Last update"
    />
</div>
<div align="center">
    <!-- Наш Facebook -->
    <a href="https://www.facebook.com/lectrum">
        <img src="https://img.shields.io/badge/%D0%9F%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D1%8B%D0%B2%D0%B0%D0%B9%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BD%D0%B0%D1%88-Facebook-blue.svg?longCache=true&style=for-the-badge&link=https://www.facebook.com/lectrum"
            alt="Подписывайся на наш Facebook" />
    </a>
</div>
<br>

<h3 align="center">
    👋🏼 Привет и добро пожаловать!
</h3>
<p>
    📸 Вместе мы построим свой Instagram в живом режиме! Так что пристегни ремни — будет интересно!
</p>
<br>
<p>
    👨🏼‍🔬 В этой инструкции ты узнаешь как настроить и запустить проект.
</p>
<br>

## 📜 Содержание

<img align="right" width="70" src="./static/logos/react.png">

-   [🚀 Инструкция для запуска проекта](#-Инструкция-для-запуска-проекта)
-   [🤖 Краткий обзор команд для проекта](#-Краткий-обзор-команд-для-проекта)
-   [🤔 FAQ](#-faq)
<br>

### 🚀 Инструкция для запуска проекта

1. Скачай и установи последнюю LTS-версию **`Node.js`**:
+ Пользователям **`MacOS`** и **`Ubuntu`** нужно [установить **`nvm`**](https://github.com/creationix/nvm#installation);
+ Пользователям **`Windows`** **`Node.js`** можно установить [обычным установщиком с официального сайта](https://nodejs.org/en/).
> Что такое nvm?\nЗачем мне устанавливать Node.js именно через **`nvm`**?
2. Выполни в консоли **`node -v`** и убедись, что установленная версия **`Node.js`** не ниже **`v8.12.0`**;
3. Выполни в консоли **`npm -v`** и убедись, что установленная версия **`npm`** не ниже **`6.4.1`**;
4. Установи [Yeoman](https://github.com/Lectrum/FAQ#%D0%A7%D1%82%D0%BE-%D1%82%D0%B0%D0%BA%D0%BE%D0%B5-yeoman) и
[генератор проекта компании Lectrum](https://github.com/Lectrum/generator-ui):

```bash
npm install -g yo @lectrum/generator-ui
```

> Если ты пользователь Windows, [настрой себе
терминал](https://github.com/Lectrum/FAQ#%D0%AF-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-windows-%D0%9A%D0%B0%D0%BA-%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%82%D1%8C-%D1%82%D0%B5%D1%80%D0%BC%D0%B8%D0%BD%D0%B0%D0%BB-%D0%B4%D0%BB%D1%8F-%D1%83%D0%B4%D0%BE%D0%B1%D0%BD%D0%BE%D0%B9-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%8B)
для удобой работы.

5. [Скачай и установи Git](https://git-scm.com/downloads), если его нет на компьютере;
6. Выполни в консоли **`git --version`**, чтобы проверь версию установленного Git, должно быть не ниже **`2.18.0`**;
7. Важно:
+ ❗️ Если ты пользователь `MacOS`, установи [Homebrew](https://brew.sh/) и выполни в консоли **`brew install
libgcrypt`**.
+ ❗️ Если ты пользователь `Ubuntu`, выполни в консоли **`sudo apt install libssl-dev`**;
8. Склонируй этот проект:

```bash
git clone https://github.com/
lectrum/
react-workshop.git
```

9. Перейди в проект, выполнив команду:

```bash
cd
react-workshop
```

10. В терминале, находясь в директории с текущим проектом, выполни команду:

```bash
yo @lectrum/ui
```

11. Генератор подготовит все нужные файлы, установит зависимости и запустит проект. Если проект не запустился, выполни
команду **`npm run start`**;
12. Перейди в браузер и открой страничку [http://localhost:3000](http://localhost:3000/). Когда сборка загрузится,
появится страничка со стартовой точкой;
13. Открой **`Chrome Dev Tools`** и перейди на вкладку **`console`**, там не должно быть каких-либо ошибок.

##### 👉🏼 Хозяйке на заметку
> Все доступные команды и возможности сгенерированного проекта можно [найти по этой
ссылке](https://github.com/Lectrum/generator-ui#-%D0%9A%D1%80%D0%B0%D1%82%D0%BA%D0%B8%D0%B9-%D0%BE%D0%B1%D0%B7%D0%BE%D1%80-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B3%D0%B5%D0%BD%D0%B5%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0).
<br>

### 🤔 FAQ

Ответы на часто задаваемые вопросы можно найти [здесь](https://github.com/Lectrum/FAQ#-faq).
<br>

### Лицензия

MIT © [Lectrum](https://lectrum.io)

<div align="center">
  <!-- Сделано с любовь -->
    <img src="https://img.shields.io/badge/%D0%A1%D0%B4%D0%B5%D0%BB%D0%B0%D0%BD%D0%BE%20%D1%81-%F0%9F%96%A4-red.svg?longCache=true&style=for-the-badge&colorA=000&colorB=fedcba"
      alt="Сделано с любовь" />
</div>
