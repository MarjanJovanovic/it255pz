import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router} from '@angular/router';
import { CommonModule } from '@angular/common';

import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
{ path: '', redirectTo: '/Home', pathMatch: 'full' },
{ path: 'Home', component: HeaderComponent },
{ path: 'About', component: IntroComponent },
{ path: 'Gallery', component: GalleryComponent },
{ path: 'Services', component: ContentComponent },
{ path: 'Testimonials', component: TestimonialComponent },
{ path: 'Clients', component: ClientsComponent },
{ path: 'Pricing', component: PricingComponent },
{ path: 'Contact us', component: ContactusComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
