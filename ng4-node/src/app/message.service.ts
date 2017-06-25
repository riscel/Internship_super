import {Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Message} from './message.model';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class MessageService{
    constructor(private http:Http){

    }

    getMessages(): Observable<any>{
        console.log("get messages ok");
        return this.http.get('/messages')
            .map((data: Response) =>{
                const extracted = data.json();
                const msgArray: Message[]=[];
                let message;
                for (let element of extracted.dataRes){
                    message= new Message(element.content);
                    msgArray.push(message)
                }
                return msgArray;
            });
    }

    saveMessage(message:Message): Observable<any>{
        const body = JSON.stringify(message);
        console.log("asdsdf");
        const headers = new Headers({'Content-Type':'application/json'});
        console.log(headers);
        return this.http.post('/message', body, {headers:headers});
    }
}