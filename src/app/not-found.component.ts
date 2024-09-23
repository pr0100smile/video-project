import { Component} from "@angular/core";

// Этот компонент выводит сообщение о неизвестной странице
@Component({
    selector: "not-found-app",
    template: "<h2>Страница не найдена</h2>"
})
export class NotFoundComponent { }