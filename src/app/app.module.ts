import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './instagram/data/data.component';
import { ImageComponent } from './instagram/image/image.component';
import { ImageDataComponent } from './instagram/image-data/image-data.component';
import { SearchUserComponent } from './instagram/search-user/search-user.component';
import { FilterpipePipe } from './filterpipe.pipe';
import { FormsModule } from '@angular/forms';
// import { addIcons } from 'ionicons'

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ImageComponent,
    ImageDataComponent,
    SearchUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FilterpipePipe,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
