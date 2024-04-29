import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LambdaService {
    private readonly lambdaUrl = 'https://gdplis53rtnhbo3v5mtcsxgpua0xuver.lambda-url.us-east-1.on.aws/';

    constructor(private http: HttpClient) {}

    callSummaryLambda(githubUrl: string): Observable<any> {
        console.log('githubUrl:', githubUrl);
        return this.http.get<any>(`${this.lambdaUrl}?githubURL=${githubUrl}`, {responseType: 'json'});
    }
}