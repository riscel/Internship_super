
import {Component, OnInit} from '@angular/core';
import {Message} from './message.model';
import {MessageService} from './message.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    providers:[MessageService]
})

export class AppComponent implements OnInit{
    messages: Message[] = [];
    title: string;
    constructor (private messageService:MessageService){
      console.log('message service constructed');
    }

    ngOnInit() {
      console.log('message service initialized');
        this.messageService.getMessages()
            .subscribe(
                messages => this.messages = messages,
                error => console.error('error di ngOnInit')
            );
    }
    
    onAddMessage(event){
      console.log(event);
        const rnd = Math.ceil(Math.random() * 100);
        const message = new Message (rnd + ' is an awesome number');
        this.messages.push(message);
        console.log("console "+ message);
        this.messageService.saveMessage(message)
            .subscribe(
                () => console.log('yay success!'),
                error => console.log('error di app.component.ts', error)
            );
    }
}