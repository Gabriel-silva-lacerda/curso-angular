import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulasPipesComponent } from './angular-pipes.component';

describe('AngulasPipesComponent', () => {
  let component: AngulasPipesComponent;
  let fixture: ComponentFixture<AngulasPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngulasPipesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AngulasPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
