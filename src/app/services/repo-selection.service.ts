import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RepoSelectionService {
    private selectedRepoSource = new BehaviorSubject<string>('');
    selectedRepo$ = this.selectedRepoSource.asObservable();

    constructor() { }

    selectRepo(repoUrl: string) {
        this.selectedRepoSource.next(repoUrl);
    }
}