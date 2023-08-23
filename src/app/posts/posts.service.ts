import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

import { Post } from "./posts.model";

@Injectable({providedIn: 'root'})
export class PostService {
    private posts: Post[] = [];
    private postsUpdate = new Subject<Post[]>();

    getPosts() {
        return [...this.posts];
    }

    getPostUpdateListner(): Observable<Post[]> {
        return this.postsUpdate.asObservable();
    }

    addPost(title: string, content: string) {
        const post: Post = {title: title, content: content};
        this.posts.push(post);
        this.postsUpdate.next([...this.posts]);
    }
}



// Observables, Observers and subscriptions
// next(), error(), complete()
/*
    we invoke next() through observables,
    we can also invoke error() and also complete()

    subscribe()
    


*/