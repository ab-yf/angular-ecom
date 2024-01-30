import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorynavComponent } from './categorynav.component';

describe('CategorynavComponent', () => {
  let component: CategorynavComponent;
  let fixture: ComponentFixture<CategorynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorynavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
