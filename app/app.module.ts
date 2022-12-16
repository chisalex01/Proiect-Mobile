import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonsService } from './services/persons.service';
import { GenderPipe } from './pipes/gender.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, GenderPipe],
  providers: [PersonsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
