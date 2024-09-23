// Во-первых, здесь импортируются функция providerRouter (для установки маршрутов)
// и класс Routes, который представляет коллекцию маршрутов
import { provideRouter, Routes } from "@angular/router";

// ля приложения маршруты устанавливаются как часть конфигурации приложения,
// которая представляет класс ApplicationConfig. Соответственно также импортируем данный класс
import { ApplicationConfig } from "@angular/core";
 
// компоненты, которые сопоставляются с маршрутами
import {HomeComponent} from "./home.component";
import {SettingComponent} from "./setting.component";
import {NotFoundComponent} from "./not-found.component";
 
// определение маршрутов
const appRoutes: Routes =[
  { path: "", component: HomeComponent},
  { path: "setting", component: SettingComponent},
  { path: "contact", redirectTo: "/about", pathMatch:"full"},
  { path: "**", redirectTo: "/"}
];

// Чтобы применить маршруты, создаем объект ApplicationConfig и устанавливаем его свойство providers
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};