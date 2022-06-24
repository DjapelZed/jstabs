# JS Tabs 
## Подключение
Загрузите [tabs.js](../master/js/tabs.js)
``` html
<script src="js/tabs.js"></script>
```
Загрузите [tabs.css](../master/css/tabs.css)
``` html
<link rel="stylesheet" href="css/tabs.css">
```
## Создание вкладки
Используйте имена классов для создания отдельных вкладок ***tabs__card*** и пунктов навигации ***tabs-nav__item***. 

Чтобы создать вкладку
``` html
<div class="tabs__card">
    <!-- Tab Content -->
</div>
```

Чтобы создать навигацию для вкладки
``` html
<div class="tabs-nav__item">Tab Name</div>
```
## Настройте стили
``` css
.tabs__card{
    /* Your css here */
}
.tabs__card.active{
    /* Your css here */
}
.tabs-nav__item{
    /* Your css here */
}
.tabs-nav__item:hover{
    /* Your css here */
}
.tabs-nav__item.active{
    /* Your css here */
}
```
## Особенности работы
``` html
Класс active <div class="active">.. указывается у начальной вкладки.
```
``` html
Количество <div class="tabs-nav__item">.. должно совпадать с количеством элементов <div class="tabs__card">..
```
``` html
Пунктами навигации могут быть любые элементы <li>, <div>, <a>, <button>...
```
## Пример использования
``` html
<div class="container">
    <div class="tabs__card">
        <!-- 1st Tab Content -->
    </div>

    <div class="tabs__card active">
        <!-- 2nd Tab Content -->
        <!-- class "active" displays a card -->
    </div>

    <div class="tabs__card">
        <!-- 3rd Tab Content -->
    </div>
    
    <!-- Tabs Navigation Container -->
    <div>
        <div class="tabs-nav__item">#1 Tab</div>
        <div class="tabs-nav__item active">#2 Tab</div>
        <div class="tabs-nav__item">#3 Tab</div>
    </div>
</div>
```