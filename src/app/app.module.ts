import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AccordionModule, ButtonModule, CalendarModule, CardModule,
  CarouselModule, CheckboxModule, ConfirmDialogModule, DataViewModule, DialogModule,
  DropdownModule, DynamicDialogModule, InputSwitchModule,
  InputTextModule, KeyFilterModule,
  MenuModule,
  MessageModule,
  MultiSelectModule,
  OverlayPanelModule,
  PanelModule,
  SelectButtonModule,
  SliderModule,
  SplitButtonModule,
  StepsModule,
  TableModule,
  TabViewModule, TerminalModule,
  TieredMenuModule,
  ToggleButtonModule, ToolbarModule, TooltipModule
} from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PromoVideoSectionComponent } from './components/promo-video-section/promo-video-section.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { BaseComponent } from './components/base/base.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import {HttpClientModule} from '@angular/common/http';

const primeNgModules = [
  AccordionModule,
  ButtonModule,
  CardModule,
  CalendarModule,
  CheckboxModule,
  ConfirmDialogModule,
  DataViewModule,
  DialogModule,
  DropdownModule,
  DynamicDialogModule,
  InputSwitchModule,
  InputTextModule,
  KeyFilterModule,
  MenuModule,
  MessageModule,
  MultiSelectModule,
  OverlayPanelModule,
  PanelModule,
  SelectButtonModule,
  SliderModule,
  SplitButtonModule,
  StepsModule,
  TableModule,
  TabViewModule,
  TieredMenuModule,
  ToggleButtonModule,
  ToolbarModule,
  TooltipModule,
];

@NgModule({
  declarations: [
    AppComponent,
    PromoVideoSectionComponent,
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BannerComponent,
    FooterComponent,
    AccessDeniedComponent,
    BaseComponent,
    LoginComponent,
    RegisterComponent,
    BreadCrumbComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ...[primeNgModules],
    DropdownModule,
    NgxUsefulSwiperModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
