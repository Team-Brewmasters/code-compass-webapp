import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectureDiagramDisplayComponent } from './architecture-diagram-display.component';

describe('ArchitectureDiagramDisplayComponent', () => {
  let component: ArchitectureDiagramDisplayComponent;
  let fixture: ComponentFixture<ArchitectureDiagramDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureDiagramDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchitectureDiagramDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
