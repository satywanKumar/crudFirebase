import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactService } from './shared/contact.service';
import {environment} from '../environments/environment';
import {RouterModule} from '@angular/router';
import { SearchPipe } from './search.pipe';
import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path:'',component:ContactListComponent},
       {path:'createContact',component:ContactComponent},
       {path:'contactList',component:ContactListComponent}
    ])
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
