# pryaniky-table

## О приложении
Это [React](https://react.dev/) приложение построенное на [Webpack](https://webpack.js.org/).
Приложение построено на архитектуре [FSD](https://feature-sliced.design/ru/)
В нем реализовано тестирование, [Storybook](https://storybook.js.org/).
Прекоммит хуки [husky](https://typicode.github.io/husky/)
Использована библиотека компонентов [MUI](https://mui.com/) 

## CI/CD Pipeline
CI с прогоном линтеров и тестов.

CD на [Vercel](https://vercel.com/), ссылка на приложение [здесь](https://pryaniky-table.vercel.app/)

## Тесты
- [Jest](https://jestjs.io/ru/) (unit)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (компонентное)
- [Loki](https://loki.js.org/) (скриншетное)

## Скрипты
### Запуск приложения с дев сервером
```bash
npm start
```

### Прод сборка
```bash
npm run build:prod
```

### Дев сборка
```bash
npm run build:dev
```
_Для остановки анализатора нажмите <kbd>Ctrl</kbd> + <kbd>C</kbd>_

### Eslint
```bash
npm run lint:ts
```
### Eslint с исправлением
```bash
npm run lint:ts:fix
```

### Stylelint
```bash
npm run lint:scss
```
### Stylelint с исправлением
```bash
npm run lint:scss:fix
```

### Запуск unit тестов
```bash
npm run test:unit
```

### Запуск скриншетных тестов
```bash
npm run test:ui
```

### Запуск применения новых скринов для тестов
```bash
npm run test:ui:ok
```

### Получение отчетов скриншетных тестов в виде JSON
```bash
npm run test:ui:json
```

### Получение отчетов скриншетных тестов в виде HTML
```bash
npm run test:ui:html
```

### Получение отчетов скриншетных тестов в виде HTML и JSON
```bash
npm run test:ui:report
```

### Storybook
```bash
npm run storybook
```
### Storybook сборка
```bash
npm run storybook:build
```



