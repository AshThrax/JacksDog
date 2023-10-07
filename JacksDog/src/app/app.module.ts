import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/Component/header/header.component';
import { FooterComponent } from './shared/Component/footer/footer.component';
import { ArticlesListComponent } from './shared/Component/articles-list/articles-list.component';
import { ArticlesSingleComponent } from './shared/Component/articles-single/articles-single.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticlesListComponent,
    ArticlesSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
