import { Routes, RouterModule } from "@angular/router";

import { RugsComponent } from "./rugs/rugs.component";



const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/rugs', pathMatch: 'full' },
    { path: 'rugs', component: RugsComponent },

];

export const routing = RouterModule.forRoot(APP_ROUTES);