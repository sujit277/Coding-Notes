import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Post } from 'src/app/Models/post';
import { PostService } from './post.service';

describe('PostService', () => {
  let postService: PostService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let POSTS: Post[];
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let testURL = "/data";


  //With HttpClientTestingModule

  beforeEach(() => {
    POSTS = [
      { id: 1, body: 'Body 1', title: 'Title 1' },
      { id: 2, body: 'Body 2', title: 'Title 2' }];


    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  })

  //With Using TestBed

  /* beforeEach(() => {

    POSTS = [
      { id: 1, body: 'Body 1', title: 'Title 1' },
      { id: 2, body: 'Body 2', title: 'Title 2' }];

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PostService, {
        provide: HttpClient, useValue: httpClientSpy,
      }],
    });
    postService = TestBed.inject(PostService);
  }); */


  //Without using Testbed

  /* beforeEach(() => {
  
    POSTS = [
      { id: 1, body: 'Body 1', title: 'Title 1' },
      { id: 2, body: 'Body 2', title: 'Title 2' }];
  
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    postService = new PostService(httpClientSpy);
  }) */


  xit('should be created', () => {
    expect(postService).toBeTruthy();
  });

  xit('should return expected posts when getposts is called', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(POSTS));
    postService.getPosts().subscribe({
      next: (posts) => {
        expect(posts).toEqual(POSTS);
        done();
      },
      error: () => { done.fail }
    })
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  })

  it('should call test URL with get request', () => {
    const testData = { name: "Sujit Kumar Verma" };
    httpClient.get(testURL).subscribe((data) => {
      expect(data).toEqual(testData);
    });
    const request = httpTestingController.expectOne('/data');
    request.flush(testData);
    expect(request.request.method).toBe('GET');
  })

  it('should test mutiple requests', () => {
    const testData = [{ name: "Sujit Kumar Verma" }, { name: "Puja Kumari" }, { name: "Chandani Kumari" }];

    httpClient.get(testURL).subscribe((data) => {
      expect(data).toEqual([testData[0]]);
    })

    httpClient.get(testURL).subscribe((data) => {
      expect(data).toEqual(testData);
    })

    const requests = httpTestingController.match(testURL);
    expect(requests.length).toEqual(2);

    requests[0].flush([testData[0]]);
    requests[1].flush(testData);
  })

});
