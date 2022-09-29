import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/Services/Post/post.service';

import { PostsComponent } from './posts.component';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let POSTS: Post[];
  let mockPostService: any;

  /* beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); */

  beforeEach(() => {

    POSTS = [
      { id: 1, body: 'Body 1', title: 'Title 1' },
      { id: 2, body: 'Body 2', title: 'Title 2' }]

    mockPostService = jasmine.createSpyObj('PostService',['getPosts', 'deletePost'])
    component = new PostsComponent(mockPostService);
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete the selected Post from the Posts',()=>{
    mockPostService.deletePost.and.returnValue(of(true));
    component.posts = POSTS;
    component.deletePost(POSTS[1]);
    expect(component.posts.length).toBe(1);
  })

  it('should call the delete method in PostService only once',()=>{
    mockPostService.deletePost.and.returnValue(of(true));
    component.posts = POSTS;
    component.deletePost(POSTS[1]);
    expect(mockPostService.deletePost).toHaveBeenCalledTimes(1);
  })

});
