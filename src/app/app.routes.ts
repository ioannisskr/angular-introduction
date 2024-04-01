import { Routes } from '@angular/router';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { ComponentForDirectiveExampleComponent } from './components/component-for-directive-example/component-for-directive-example.component';

export const routes: Routes = [
    {path: 'component-input-example', component: ComponentInputExampleComponent},
    {path: 'for-directive-example', component: ComponentForDirectiveExampleComponent},
    {path: 'event-bind-example', component: EventBindExampleComponent},
    {path: '', component: WelcomeComponent},
];
