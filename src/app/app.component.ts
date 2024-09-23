import { Component} from "@angular/core";
import { RouterOutlet} from "@angular/router";

// Определили три разных компонента для разных маршрутов, однако в качестве главного компонента
// выступает AppComponent. Этот компонент выступает в качестве контейнера для остальных компонентов,
// которые будут обслуживать запросы к приложению.
// Но чтобы можно было внедрить в AppComponent тот компонент, который обрабатывает запрос, необходимо
// использовать элемент RouterOutlet
@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet],
    template: `<div>
                    <h1>Приложение Angular</h1>
                    <router-outlet></router-outlet>
               </div>`,
})
export class AppComponent {}