import { Component, OnDestroy, OnInit } from "@angular/core";
import { PostService } from "../posts.service";
import { Subscription } from "rxjs";


import { Post } from "../posts.model";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls:['./post-list.component.css']
})


export class PostListComponent implements OnInit, OnDestroy {
    // posts = [
    //     {title: "First Post", content: "This is the first post content!"},
    //     {title: "Second Post", content: "This is the second post content!"},
    //     {title: "Third Post", content: "This is the third post content!"},
    // ]
    posts: Post[] = [];
    private postSub!: Subscription;
    constructor(public postsService: PostService) {}

    ngOnInit(): void {
        this.posts = this.postsService.getPosts();
        this.postSub = this.postsService.getPostUpdateListner()
            .subscribe((posts: Post[]) => {
                this.posts = posts;
            });
    }

    ngOnDestroy(): void {
        this.postSub.unsubscribe();
    }
}