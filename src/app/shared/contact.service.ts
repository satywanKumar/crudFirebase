import { Injectable } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private firebase:AngularFireDatabase,
             private router:Router) { }
  contactList:AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email)
  });

  getContact()
  {
    this.contactList = this.firebase.list('contact');
    return this.contactList.snapshotChanges();
  }
  insertContact(contact)
  {
    this.contactList.push({
      fullName:contact.fullName,
      phone:contact.phone,
      email:contact.email
    })
  }
  populateForm(contact)
  {
    this.router.navigate(['/createContact']);
    this.form.setValue(contact);
  }
  updateContact(contact)
  {
    this.contactList.update(contact.$key,{
      fullName:contact.fullName,
      phone:contact.phone,
      email:contact.email
    });
  }
  deleteContact($key:string)
  {
    this.contactList.remove($key);
  }
}
