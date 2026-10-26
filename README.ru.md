<div align="center">

# iOSDemo - телефон «Стекло»

**Телефон в стиле iOS 26, который целиком работает в браузере: экран блокировки, домашний экран, пункт управления, центр уведомлений, переключатель программ и четырнадцать работающих программ, всё под жидким стеклом. Без сервера, без интернета, без картинок и шрифтов из настоящей системы: значки и обои нарисованы кодом этого репозитория.**

[**▶ Открыть онлайн →**](https://alexalesha.github.io/iOSDemo/) &nbsp;·&nbsp; [English version of this file](README.md)

[![Status](https://img.shields.io/badge/status-stable-brightgreen)](#) [![CI](https://github.com/ALEXalesha/iOSDemo/actions/workflows/ci.yml/badge.svg)](https://github.com/ALEXalesha/iOSDemo/actions/workflows/ci.yml) [![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML) [![Website](https://img.shields.io/badge/Website-open-0A84FF?logo=googlechrome&logoColor=white)](https://alexalesha.github.io/iOSDemo/) [![Built with Claude Code](https://img.shields.io/badge/Built_with-Claude_Code-D97757?logo=claude&logoColor=white)](https://claude.com/claude-code)

Код, тесты и документация этого проекта написаны Claude (Anthropic) в Claude Code. Идеи, проверка и решения - Алексей.

</div>

> Фан-концепт интерфейса. Не связан с Apple и не одобрен ею. iOS - товарный знак или
> зарегистрированный товарный знак Cisco в США и других странах, используется Apple по лицензии;
> iPhone - товарный знак Apple Inc.

![Экран блокировки](docs/screens/lock.png)

![Домашний экран](docs/screens/home.png)

![Пункт управления](docs/screens/control-center.png)

## Что умеет

- **Стекло:** преломляющее стекло дока, виджетов, папок и пункта управления сделано по технике
  [LiquidGlass](https://github.com/ALEXalesha/LiquidGlass); шесть обоев рисуются на холсте;
  светлая и тёмная темы.
- **Жесты идут за указателем:** смахнуть вверх с полоски внизу - домой (или щелчок по полоске, или
  Esc), смахнуть вверх и задержать - переключатель программ (карточки листаются вбок), потянуть
  вниз от левого верхнего угла - центр уведомлений, от правого - пункт управления.
- **Программы:** Телефон, Сообщения, Почта, Браузер (встроенные страницы), Камера, Фото, Музыка
  (синтезированные мелодии), Погода, Часы (мировые часы, будильники, секундомер), Калькулятор,
  Заметки, Календарь, Настройки, Файлы (хранятся в браузере, IndexedDB) и папка «Игры».
- **Игры:** десять игр сборника [Hub](https://github.com/ALEXalesha/ALEXalesha.github.io) открываются
  на весь экран: «Кубический мир», «Блоксити», «Операция: Периметр», Horizon Drift, «Дино-бег», «Прыг-скок»,
  «Огненные джунгли», «Космический стрелок», «Блоки» и «Судоку». Каждая - свой репозиторий: на
  GitHub Pages телефон загружает `../../<репозиторий>/` того же сайта (например,
  [AlexMine](https://alexalesha.github.io/AlexMine/)). У себя положите клоны игр рядом с этим
  репозиторием. Игра встаёт на паузу, когда уходишь «Домой» (протокол - в
  `_os-shared/README.md`).
- Сохраняются настройки, обои, заметки, будильники, события, переписка и снимки.

Страница лежит в `ios26/`, собирается из `ios26/src/` командой `node ios26/src/build.js`.
`index.html` в корне просто открывает её.

## Запуск у себя

Откройте `index.html` или `ios26/index.html` в Chrome или Edge.

## Проверки

Законы Playwright в `tests/` открывают страницу по файловому адресу в безголовом Chromium, по
одной за раз:

```
npm install
npx playwright install chromium
npm test
```

Захват мыши в проверках всегда поддельный. `npm run screenshots` делает кадры выше.

## История

Телефон сделан в сборнике MixOfProject (папки `web/ios26` и `web/_os-shared`). Здесь он лежит
с историей коммитов, начиная с того, который убрал из первого черновика чужие названия и знаки;
стартовая страница, таблица отдельно опубликованных игр и проверки добавлены для этой
публикации.

## Лицензия

MIT, см. [LICENSE](LICENSE).
