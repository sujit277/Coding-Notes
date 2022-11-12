import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";
import { ContactComponent } from "./contact/contact.component";
import { AppComponent } from "./app.component";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { routes } from "./app-routing.module";

describe('Routing Testing', () => {
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes)],
            declarations: [HomeComponent, SearchComponent, ContactComponent, AppComponent]
        })
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    })

    it("fakeAsync works", fakeAsync(() => {
        let promise = new Promise(resolve => {
          setTimeout(resolve, 10);
        });
        let done = false;
        promise.then(() => (done = true));
        tick(50);
        expect(done).toBeTruthy();
      }));
    
      it('navigate to "" redirects you to /home', fakeAsync(() => {
        router.navigate([""]).then(() => {
          expect(location.path()).toBe("/home");
        });
      }));
    
      it('navigate to "search" takes you to /search', fakeAsync(() => {
        router.navigate(["/search"]).then(() => {
          expect(location.path()).toBe("/search");
        });
      }));

})