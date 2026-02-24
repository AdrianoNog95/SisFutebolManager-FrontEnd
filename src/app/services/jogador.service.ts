import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Jogador } from '../models/jogador';

@Injectable({
    providedIn: 'root'
})  
export class JogadorService {

    http = inject(HttpClient);

    API = "http://localhost:8080/api/jogador1";

    constructor() {}

    listAll(): Observable<Jogador[]>{
        return this.http.get<Jogador[]>(this.API+"/listAll");
    }

    delete(idJogador1: number): Observable<string>{
        return this.http.delete<string>(this.API+"/delete/"+idJogador1, {responseType: 'text' as 'json'});
    }

    save(jogador: Jogador): Observable<string>{
        return this.http.post<string>(this.API+"/save", jogador, {responseType: 'text' as 'json'});
    }

    update(jogador: Jogador, idJogador1: number): Observable<string>{
        return this.http.put<string>(this.API+"/update/"+idJogador1, jogador, {responseType: 'text' as 'json'});
    }

    findById(idJogador1: number): Observable<Jogador>{
        return this.http.get<Jogador>(this.API+"/findById/"+idJogador1);
    }

}    