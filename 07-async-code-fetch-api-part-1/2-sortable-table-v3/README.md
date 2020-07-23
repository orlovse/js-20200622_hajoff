# SortableTable v3 с динамической загрузкой данных и "infinity scroll"
  
Необходимо добавить функционал загрузки данных в компонент ["SortableTable v2"](taskbook:events-practice/sortable-table-v2)
из предыдущего модуля "События в браузере - практика" таким образом, чтобы
сортировка таблицы происходила на сервере, или другими словами, при клике на хедер 
таблицы должен отправляться запрос на сервер с параметрами сортировки. 
Данные с сервера вернутся в отсортированном порядке, после чего таблицу необходимо обновить новыми данными.

!["SortableTable v3"](sortable-table-v3.gif)

Также необходимо реализовать [infinity scroll](https://en.wiktionary.org/wiki/infinite_scroll) для порционной загрузки данных.
Сортировка, как и прежде, может происходить как на "сервере" так и на "клиенте" - в зависимости от переданных опций.
Обратите внимание, если при прокрутке произошла загрузка данных и контент занимает несколько экранов, то при сортировке
на "сервере" необходимо сбросить количество подгруженных элементов к значениям которые были установлены при первой загрузке.

!["SortableTable v3"](infinity-scroll.gif)

**Обратите внимание:**
Данная таблица используется на различных страницах проекта, поэтому необходимо предусмотреть
возможность загрузки данные с различных ресурсов.

**Запросы на сервер:**
Все параметры API можно получить на странице демо-версии проекта [https://course-js.javascript.ru/](https://course-js.javascript.ru/)
проинспектировав "сетевые запросы" (в "Google Chrome" это вкладка "Network" в консоли разработчика)

Также в таблице необходимо предусмотреть:
* индикатор загрузки
* при условии если сервер вернул пустой массив данных - показать пользователю сообщение о тома что 
по заданному критерию запроса данные отсутствуют