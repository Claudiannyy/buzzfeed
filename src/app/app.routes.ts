import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizzComponent } from './components/quizz/quizz.component';

export const routes: Routes = [
   { path:"home",
    component: HomeComponent}, { path: 'quizz', component: QuizzComponent }
   
];
