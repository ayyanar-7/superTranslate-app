import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { EditComponent } from './edit/edit.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { SidebarModule } from 'primeng/sidebar';
import { TabMenuModule } from 'primeng/tabmenu';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { SliderModule } from 'primeng/slider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputSwitchModule } from 'primeng/inputswitch';
=======
import { LoginComponent } from './login/login.component';
>>>>>>> d00da3695618d291c872e609a1a888c52e4ba292

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    EditComponent
=======
    LoginComponent
>>>>>>> d00da3695618d291c872e609a1a888c52e4ba292
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    InputSwitchModule,
    SplitButtonModule,
    SliderModule,
    DialogModule,
    TableModule,
    DropdownModule,
    TabViewModule,
    CheckboxModule,
    ToastModule,
    ProgressBarModule,
    AvatarGroupModule,
    AvatarModule,
    TabMenuModule,
    SidebarModule,
    AccordionModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
