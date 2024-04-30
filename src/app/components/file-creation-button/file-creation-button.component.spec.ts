import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCreationButtonComponent } from './file-creation-button.component';

describe('FileCreationButtonComponent', () => {
  let component: FileCreationButtonComponent;
  let fixture: ComponentFixture<FileCreationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileCreationButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileCreationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
