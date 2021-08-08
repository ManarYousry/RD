import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../navigation/footer/footer.component';
import { NavlistComponent } from '../navigation/navlist/navlist.component';
import { HeaderComponent } from '../navigation/header/header.component';
import { LayoutComponent } from './layout.component';
import { ChartsComponent } from 'src/app/components/charts/charts.component';
import { EditComponent } from 'src/app/components/edit/edit.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { MaterialModule } from '../../modules/material/material.module';
import { Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DeleteComponent } from '../msg/delete/delete.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoaderComponent } from '../loader/loader.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { MicrowaveComponent } from 'src/app/components/microwave/microwave.component';
import { MicrowaveFormComponent } from 'src/app/components/microwave-form/microwave-form.component';
import { CopperComponent } from 'src/app/components/copper/copper.component';
import { CopperFormComponent } from 'src/app/components/copper-form/copper-form.component';
import { FiberComponent } from 'src/app/components/fiber/fiber.component';
import { FiberFormComponent } from 'src/app/components/fiber-form/fiber-form.component';



@NgModule({
  declarations: [
    DashboardComponent,
    EditComponent,
    ChartsComponent,
    LayoutComponent,
    HeaderComponent,
    NavlistComponent,
    FooterComponent,
    DeleteComponent,
    LoaderComponent,
    MicrowaveComponent,
    MicrowaveFormComponent,
    CopperComponent,
    CopperFormComponent,
    FiberComponent,
    FiberFormComponent

  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatMomentModule,
    
  ],
  providers:[Title]
})
export class LayoutModule { }
