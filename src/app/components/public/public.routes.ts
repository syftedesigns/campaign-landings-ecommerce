import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EcommerceComponent } from './ecommerce/ecommerce.component';


const routes: Routes = [
    {
        path: '',
        component: EcommerceComponent,
        data: {Title: 'Create your online store today | Syftedesigns.com'}
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule {}
