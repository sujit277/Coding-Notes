import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async, of } from 'rxjs';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/Services/Post/post.service';
import { PostsComponent } from './posts.component';

@Component({
  selector: 'app-post',
  template: '<div></div>',
})

export class FakePostComponent { }

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let POSTS: Post[];
  let mockPostService: any;
  let a:any;

  beforeEach(async () => {

    POSTS = [
      { id: 1, body: 'Body 1', title: 'Title 1' },
      { id: 2, body: 'Body 2', title: 'Title 2' }];

    mockPostService = jasmine.createSpyObj('PostService',['getPosts', 'deletePost']);

    await TestBed.configureTestingModule({
      declarations: [PostsComponent],
      imports:[HttpClientModule],
      providers: [{
        provide: PostService,
        useValue: mockPostService,
      }],
      schemas:[NO_ERRORS_SCHEMA]
    },) 
      .compileComponents();

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    a = TestBed.inject(mockPostService); 
    fixture.detectChanges();   
  });



  /* beforeEach(async () => {

    POSTS = [
      { id: 1, body: 'Body 1', title: 'Title 1' },
      { id: 2, body: 'Body 2', title: 'Title 2' }]

    mockPostService = jasmine.createSpyObj('PostService', ['getPosts', 'deletePost'])
    await TestBed.configureTestingModule({
      declarations: [PostsComponent,FakePostComponent],
      providers: [{
        provide: PostService,
        useValue: mockPostService,
      }],
      schemas: [NO_ERRORS_SCHEMA]
    },)
      .compileComponents();

    component = new PostsComponent(mockPostService);

  }) */

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete the selected Post from the Posts', () => {
    a.deletePost.and.returnValue(of(true));
    component.posts = POSTS;
    component.deletePost(POSTS[1]);
    expect(component.posts.length).toBe(1);
  })

  it('should call the delete method in PostService only once', () => {
   a.deletePost.and.returnValue(of(true));
    component.posts = POSTS;
    component.deletePost(POSTS[1]);
    expect(a.deletePost).toHaveBeenCalledTimes(1);
  })

});
