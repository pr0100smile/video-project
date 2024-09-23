import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import {appConfig} from "./app/app.config";

// Вторым, необязательным параметров функции bootstrapApplication()
// передается конфигурация приложения ApplicationConfig. И в данном случае
// передаем наш объект appConfig, который будет настраивать систему маршрутизации
bootstrapApplication(AppComponent, appConfig);