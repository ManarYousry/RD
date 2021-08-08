import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopperFormComponent } from './components/copper-form/copper-form.component';
import { CopperComponent } from './components/copper/copper.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FiberFormComponent } from './components/fiber-form/fiber-form.component';
import { FiberComponent } from './components/fiber/fiber.component';
import { MicrowaveFormComponent } from './components/microwave-form/microwave-form.component';
import { MicrowaveComponent } from './components/microwave/microwave.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { LoginComponent } from './shared/components/login/login.component';

const routes: Routes = [
//   {
//     path:'login',
//   component:LoginComponent,
//  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,


    children: [{
      path: 'home',
      component: DashboardComponent,

    },
    {
      path: 'microwave',
      component: MicrowaveComponent,

    },
    {
      path: 'microwaveRequestForm',
      component: MicrowaveFormComponent,
      

    },
    {
      path: 'copper',
      component: CopperComponent,

    },
    {
      path: 'copperRequestForm',
      component: CopperFormComponent,

    },
    {
      path: 'fiber',
      component: FiberComponent,

    },
    {
      path: 'fiberRequestForm',
      component: FiberFormComponent,

    },
  
    
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
