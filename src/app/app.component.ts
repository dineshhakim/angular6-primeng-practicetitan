import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  name = 'Angular';

  colors: [
            {label: 'Red', value: '#ff0000'},
            {label: 'Green', value: '#00ff00'},
            {label: 'Yellow', value: '#FFFF00'}           
        ];
  selectedColor: any;
  constructor(private messageService: MessageService) {  
   this.colors= [
            {label: 'Red', value: '#ff0000'},
            {label: 'Green', value: '#00ff00'},
            {label: 'Yellow', value: '#FFFF00'}           
        ];
    this.selectedColor=this.colors[0].value;   
    console.log(this.selectedColor);
  }
   onChange(value){
    //  console.log(value);
    //   this.selectedColor = value;
  }

  addSingle() {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  }

  addMultiple() {
    this.messageService.addAll(
      [
        { severity: 'success', summary: 'Service Message', detail: 'Via MessageService' },
    { severity: 'info', summary: 'Info Message', detail: 'Via MessageService' }]);
  }

  clear() {
    this.messageService.clear();
  }
}
