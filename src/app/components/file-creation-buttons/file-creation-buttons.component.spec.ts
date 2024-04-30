import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileCreationButtonsComponent } from './file-creation-buttons.component';

describe('FileCreationButtonsComponent', () => {
  let component: FileCreationButtonsComponent;
  let fixture: ComponentFixture<FileCreationButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileCreationButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileCreationButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
