# Домашние задания "Node.js", "Инфраструктура" и "Тестирование"

Домашние задания #4, 5, 6 в ШРИ Яндекса 2018.

## Содержание

1. [Задание "Node.js"](#Задание-nodejs)
2. [Задание "Инфраструктура"](#Задание-Инфраструктура)
3. [Задание "Тестирование"](#Задание-Тестирование)
3. [Запуск](#Запуск)
3. [Выполнение задания](#Выполнение-задания)

## Задание "Node.js"

Сделать веб-интерфейс для локального git репозитория.

### Предметная область

- [x] приложение показывает список веток, можно выбрать ветку
- [x] для выбранной ветки можно смотреть дерево файлов
- [x] для выбранной ветки можно смотреть историю коммитов
- [x] для выбранного коммита можно смотреть дерево файлов, как и для ветки
- [x] одновременно отображается текущий уровень дерева файлов, можно перейти по ссылкам во вложенные папки или подняться на уровень выше
- [x] можно смотреть содержимое файлов

### Реализация

- [x] должно получиться приложение node + express.
- [x] шаблонизация на сервере
- [x] работа с git через CLI
- [x] для асинхронных операций использовать промисы, за callback - снижение оценки
- [x] настройки приложения хранить в конфигурационном файле:
    - [x] путь к папке с репозиторием,
    - [x] хост и порт веб-сервера,
    - [ ] не обязательно формат отображения дат и времени
- [x] внешний вид (вёрстка, стили) - не важен и не оценивается

### Необходимо изучить

- основы node, работа с файловой системой (модуль fs), запуск дочерних процессов (модуль child_process)
- express + шаблонизация
- промисы

## Задание "Инфраструктура"

Освоить настройку инфраструктуры простейшего приложения. В качестве приложения на Node.js, берём то приложение, что разрабатывается в рамках домашнего приложения по лекции «Node.js».

### Основное

Необходимо настроить инфраструктуру приложения на Node.js. Всё домашнее задание по этой теме будет разделено на четыре части, которые описаны ниже.

- [x] Проверка кода
- [x] Сборка проекта
- [x] Контейнеризация приложения
- [x] Continuous Integration

#### Проверка кода

В этой части домашнего задания необходимо настроить инструменты, которые будут проверять написанный вами код. Например, вы можете организовать эту проверку, используя npm-скрипты:

```bash
npm run lint
npm run test
```

Часть считается успешно выполненной, если JS-файлы будут проверяться с помощью инструмента ESLint и какого-либо выбранного набора правил для него. Если у вашего приложения планируется написание тестов, то они также должны запускаться на этом этапе. Также было бы неплохо настроить линтер для CSS-файлов, но необязательно.

#### Сборка проекта

Необходимо настроить сборку проекта по следующим критериям:

- [x] Dev-сборка
    - [x] При изменении JS- или CSS-файлов должна запускаться задача на сборку соотвествующей технологии
- [x] Production-сборка
    - [x] Полная сборка проекта
    - [x] Минификация кода

#### Контейнеризация приложения

Контейнеризация – это хорошо. Давайте настроим сборку Docker-контейнера. Для этого вам нужно освоить построение Docker-контейнера и, собственно, построить его. В итоге должен получиться Docker-контейнер, содержащий ваше приложение.

Критерием успешного выполнения будет файл Dockerfile, в котором описана сборка контейнера. После сборки и запуска контейнера должно быть доступно ваше приложение.

#### Continuous Integration

После того, как код проекта может проверяться и собираться – самое время настроить непрерывную интеграцию. Необходимо настроить взаимодействие трёх сервисов: GitHub, Travis и Heroku.

В Heroku нужно настроить pipeline, используя интерфейс сервиса (кнопочка new). Не забудьте поставить галочку напротив Automatically create apps, иначе не заработает автоматическое создание стендов для пулл-реквестов.

В итоге должна получиться следующая схема взаимодействия:

- [x] Пользователь создаёт пулл-реквест или делает коммит в master ветку на GitHub.
- [x] Travis запускает проверки для пулл-реквеста, выполняя следующие действия:
    - [x] Проверка кода (линтеры, тесты)
    - [x] Сборка проекта
    - [ ] Поднятие стенда в Heroku на основе Docker-контейнера в review-режиме (pipeline)
- [x] Travis запускает проверки для master-ветки, выполняя следующие действия:
    - [x] Проверка кода (линтеры, тесты)
    - [x] Сборка проекта
    - [ ] Поднятие стенда в Heroku на основе Docker-контейнера в staging-режиме (pipeline)

### Дополнительное

- [ ] CI + CD (advanced level)

#### CI + CD (advanced level)

При выставлении тега происходит деплой приложения в Heroku, но не в staging, а в production окружение.

## Задание "Тестирование"

Настроить окружение и написать интеграционные тесты в браузерах chrome и firefox на веб-интерфейс для локального git репозитория.

### Модульное тестирование

- [ ] Нужно написать модульные тесты для приложения из ДЗ по теме Node.js.
- [ ] Результат выполнения - репозиторий на GitHub, в котором настроено выполнение тестов.
- [ ] Выберите тестовые сценарии - на своё усмотрение. В README.md кратко опишите структуру приложения и сценарии для модульных тестов.
- [ ] Бонусное задание: настройте построение отчета о покрытии кода тестами.

### Итеграционное тестирование

- [ ] 1. Настройка окружения
    - [ ] 1.1. Установить локальный selelium и hermione
    - [ ] 1.2. Сконфигурировать hermione
    - [ ] 1.3. Написать интеграционный тест, который открывает главную страницу приложения, получает title страницы, проверить, что title страницы соответствует ожидаемому.
- [ ] 2. Создать git репозиторий с разными коммитами, ветками и т д., который будет использоваться в интеграционных тестах.
- [ ] 3. Написание интеграционных тестов:
    - [ ] 3.1. Отображение ветки по умолчанию
        - [ ] 3.1.1. Открыть страницу приложения
        - [ ] 3.1.2. Проверить, что из списка всех веток отображается ветка по умолчанию
        - [ ] 3.1.3. Проверить, что для ветки отображается список коммитов
        - [ ] 3.1.4. Проверить, что для ветки отображается корректный список файлов и папок
    - [ ] 3.2. Работа с деревом файлов в ветке по умолчанию
        - [ ] 3.2.1. Открыть страницу приложения
        - [ ] 3.2.3. Перейти в один из каталогов
        - [ ] 3.2.4. Проверить, что отображается корректный список файлов и папок
        - [ ] 3.2.5. Вернуться на каталог выше
        - [ ] 3.2.6. Проверить, что отображается корректный список файлов и папок
    - [ ] 3.3. Отображение содержимого файла в ветке по умолчанию
        - [ ] 3.3.1. Открыть страницу приложения
        - [ ] 3.3.2. Перейти в каталог, содержащий файлы
        - [ ] 3.3.3. Открыть файл
        - [ ] 3.3.4. Проверить, что содержимое файла отображается
        - [ ] 3.3.5. Закрыть файл
        - [ ] 3.3.6. Проверить, что отображается корректный список файлов и папок
    - [ ] 3.4. Работа с деревом файлов для коммита из ветки по умолчанию
        - [ ] 3.4.1. Открыть страницу приложения
        - [ ] 3.4.2. Перейти в коммит из ветки
        - [ ] 3.4.3. Проверить, что в корне дерева файлов коммита отображается корректный список файлов и папок
        - [ ] 3.4.4. Перейти в один из каталогов
        - [ ] 3.4.5. Проверить, что отображается корректный список файлов и папок
        - [ ] 3.4.6. Вернуться на каталог выше
        - [ ] 3.4.7. Проверить, что отображается корректный список файлов и папок
    - [ ] 3.5. Отображение содержимого файла для коммита из ветки по умолчанию
        - [ ] 3.5.1. Открыть страницу приложения
        - [ ] 3.5.2. Перейти в коммит из ветки
        - [ ] 3.5.3. Перейти в каталог, содержащий файлы
        - [ ] 3.5.4. Открыть файл
        - [ ] 3.5.5. Проверить, что содержимое файла отображается
        - [ ] 3.5.6. Закрыть файл
        - [ ] 3.5.7. Проверить, что отображается корректный список файлов и папок
    - [ ] 3.6. Отображение ветки отличной от ветки по умолчанию
        - [ ] 3.6.1. Открыть страницу приложения
        - [ ] 3.6.2. Выбрать ветку отличную от ветки по умолчанию
        - [ ] 3.6.3. Проверить, что в списке всех веток теперь отображается выбранная
        - [ ] 3.6.4. Проверить, что для ветки отображается список коммитов
        - [ ] 3.6.5. Проверить, что для ветки отображается корректный список файлов и папок
    - [ ] 3.7. Работа с деревом файлов в ветке отличной от ветки по умолчанию
        - [ ] 3.7.1. Открыть страницу приложения
        - [ ] 3.7.2. Выбрать ветку отличную от ветки по умолчанию
        - [ ] 3.7.3. Перейти в один из каталогов
        - [ ] 3.7.4. Проверить, что отображается корректный список файлов и папок
        - [ ] 3.7.5. Вернуться на каталог выше
        - [ ] 3.7.6. Проверить, что отображается корректный список файлов и папок
    - [ ] 3.8. Отображение содержимого файла в ветке отличной от ветки по умолчанию
        - [ ] 3.8.1. Открыть страницу приложения
        - [ ] 3.8.2. Выбрать ветку отличную от ветки по умолчанию
        - [ ] 3.8.3. Перейти в каталог, содержащий файлы
        - [ ] 3.8.4. Открыть файл
        - [ ] 3.8.5. Проверить, что содержимое файла отображается
        - [ ] 3.8.6. Закрыть файл
        - [ ] 3.8.7. Проверить, что отображается корректный список файлов и папок
    - [ ] 3.9. Работа с деревом файлов для коммита из ветки отличной от ветки по умолчанию
        - [ ] 3.9.1. Открыть страницу приложения
        - [ ] 3.9.2. Выбрать ветку отличную от ветки по умолчанию
        - [ ] 3.9.3. Перейти в коммит из ветки
        - [ ] 3.9.4. Проверить, что в корне дерева файлов коммита отображается корректный список файлов и папок
        - [ ] 3.9.5. Перейти в один из каталогов
        - [ ] 3.9.6. Проверить, что отображается корректный список файлов и папок
        - [ ] 3.9.7. Вернуться на каталог выше
        - [ ] 3.9.8. Проверить, что отображается корректный список файлов и папок
    - [ ] 3.10. Отображение содержимого файла для коммита из ветки отличной от ветки по умолчанию
        - [ ] 3.10.1. Открыть страницу приложения
        - [ ] 3.10.2. Выбрать ветку отличную от ветки по умолчанию
        - [ ] 3.10.3. Перейти в коммит из ветки
        - [ ] 3.10.4. Перейти в каталог, содержащий файлы
        - [ ] 3.10.5. Открыть файл
        - [ ] 3.10.6. Проверить, что содержимое файла отображается
        - [ ] 3.10.7. Закрыть файл
        - [ ] 3.10.8. Проверить, что отображается корректный список файлов и папок

## Запуск

```bash
$ npm i
$ npm start
```

Для разработки:

```bash
$ npm run dev
```

## Выполнение задания

### 1. Node.js

- Сделал приложение похожее на [GitHub](https://github.com)
- Сделал ЧПУ (человеко-читаемый URL)
- Для работы с git использовал `child_process.spawn` и следующие команды:
    - `git ls-tree -r -t <object> <path>` — для получения списка файлов
    - `git branch` — для получения списка веток
    - `git rev-parse --show-toplevel` — для получения имени репозитория
    - `log <object> -- <path>` — для получения списка коммитов
    - `cat-file <type> <object>` — для получения содержимого файла
- Команду `git checkout` и модуль `fs` в этом задании я не использовал по причине того, что данный подход может вызвать осложнения при однвременной работе нескольких пользователей с приложением, и это медленнее.
- Есть временное решение для случаев, где в именах веток есть символ `/`, заменяю его на `--`. Пока не придумал, как это реализовать лучше.
- Есть много дублирующего кода, в дальнейшем планирую это всё выделить в отдельные функции.

### 2. Инфраструктура

- Сделал проверку кода eslint и stylelint через npm-scripts
- Настроил автоматическое форматирвоание и исправление кода с lint-staged и husky на `pre-commit` хуке.
- Настроил инфраструктуру для разработки с nodemon и browser-sync (+ gulp, babel и webpack)
- Сделал сборку проекта с gulp, babel и webpack
- Сделал контейнеризацию приложения с docker. Удалось собрать и запустить локально. Пришлось ставить внутри git и скачивать репозиторий отдельно для корректной работы.
- Настроил CI с travic-ci
- Настроил CD с heroku. Но, к сожалению, не удалось поднять там docker (и поэтому приложение не работает). Попробую разобраться позже.
