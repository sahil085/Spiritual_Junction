import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  AccordionModule, AutoCompleteModule,
  ButtonModule,
  CalendarModule,
  CardModule,
  CarouselModule,
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
  MessageModule, MessageService,
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
  ToastModule,
  ToggleButtonModule,
  ToolbarModule,
  TooltipModule
} from 'primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PromoVideoSectionComponent} from './components/promo-video-section/promo-video-section.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {BannerComponent} from './components/banner/banner.component';
import {FooterComponent} from './components/footer/footer.component';
import {AccessDeniedComponent} from './components/access-denied/access-denied.component';
import {BaseComponent} from './components/base/base.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BreadCrumbComponent} from './components/bread-crumb/bread-crumb.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FeaturesSectionComponent} from './components/features-section/features-section.component';
import {ExpertsSectionComponent} from './components/experts-section/experts-section.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component';
import {AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { SrilaPrabhupadaPageComponent } from './components/srila-prabhupada-page/srila-prabhupada-page.component';
import { AboutIskconPageComponent } from './components/about-iskcon-page/about-iskcon-page.component';
import { ActivitiesPageComponent } from './components/activities-page/activities-page.component';
import {SafePipe} from './pipes/SafePipe';
import { FestivalsPageComponent } from './components/festivals-page/festivals-page.component';
import { ViplavaPageComponent } from './components/viplava-page/viplava-page.component';
import {ServiceLocator} from './models/service-locator';
import {AuthHttpInterceptorService} from './services/security/auth-http-interceptor.service';
import { AppHttpInterceptor } from './services/app-http-interceptor';
import {ToastrService} from 'ngx-toastr';
import { CampsPageComponent } from './components/camps-page/camps-page.component';
import { SchoolsPageComponent } from './components/schools-page/schools-page.component';
import { CounsellingPageComponent } from './components/counselling-page/counselling-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ViewCoursePageComponent } from './components/view-course-page/view-course-page.component';
import { FaqComponent } from './components/faq/faq.component';

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
  ToastModule,
  ToggleButtonModule,
  ToolbarModule,
  TooltipModule,
];

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('550274808732-25ngp3589dugp6ba72crq96rls0f0s4t.apps.googleusercontent.com')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('571885383735024')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    PromoVideoSectionComponent,
    FeaturesSectionComponent,
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
    BreadCrumbComponent,
    ExpertsSectionComponent,
    NotFoundPageComponent,
    BreadCrumbComponent,
    AboutUsPageComponent,
    SrilaPrabhupadaPageComponent,
    AboutIskconPageComponent,
    ActivitiesPageComponent,
    SafePipe,
    FestivalsPageComponent,
    ViplavaPageComponent,
    CampsPageComponent,
    SchoolsPageComponent,
    CounsellingPageComponent,
    ContactPageComponent,
    ViewCoursePageComponent,
    FaqComponent,
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
    HttpClientModule,
    CarouselModule,
    SocialLoginModule,
    AutoCompleteModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: AuthServiceConfig, useFactory: provideConfig},
    {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true},
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {    // Create global Service Injector.
    ServiceLocator.injector = this.injector;
  }
}
