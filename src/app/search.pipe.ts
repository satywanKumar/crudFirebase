import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(contactList: any[], searchTerm:string): any {
    if(!contactList || !searchTerm)
    {
      return contactList;
    }
    return contactList.filter(contact=>
      contact.fullName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
