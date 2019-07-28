import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private contactService:ContactService) { }
  contactList = [];
  deleteMessage:boolean;

  ngOnInit() {
    this.getContact();
  }
  getContact()
  {
    this.contactService.getContact().subscribe(data=>{
      this.contactList = data.map(item=>{
        return{
          $key:item.key,
          ...item.payload.val()
        };
      });
    });
  }
  deleteContact($key){
    if(confirm('are you sure want to delete this contact'))
    {
      this.contactService.deleteContact($key);
      this.getContact();
      this.deleteMessage=true;
      setTimeout(()=>this.deleteMessage=false,3000);
    }
  }

}
