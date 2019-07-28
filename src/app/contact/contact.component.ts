import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService:ContactService,
              private router:Router) { }
  submitted:boolean;
  formControls = this.contactService.form.controls;
  showSuccessMessage:boolean;

  ngOnInit() {
    this.contactService.getContact();
  }

  onSubmit()
  {
    this.submitted = true;
    if(this.contactService.form.valid)
    {
      if(this.contactService.form.get('$key').value == null)
         this.contactService.insertContact(this.contactService.form.value);
      else
         this.contactService.updateContact(this.contactService.form.value);
       console.log('added successfully');
       this.showSuccessMessage = true;
       setTimeout(()=> this.showSuccessMessage = false,3000);
      this.submitted = false;
      this.contactService.form.reset();
      this.router.navigate(['/contactList']);
      
    }
  }

}
