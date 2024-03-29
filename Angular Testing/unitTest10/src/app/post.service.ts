import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  deletePost(post: any) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/post/${post.id}`);
  }

}
