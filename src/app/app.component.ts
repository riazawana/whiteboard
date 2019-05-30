import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CanvasWhiteboardModule,CanvasWhiteboardComponent,CanvasWhiteboardOptions } from 'ng2-canvas-whiteboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  viewProviders: [CanvasWhiteboardComponent],
})
export class AppComponent {
  title = 'app-demo';
  public canvasOptions:CanvasWhiteboardOptions;
@Output() onClear = new EventEmitter<any>();
/*@Output() onBatchUpdate = new EventEmitter<CanvasWhiteboardUpdate[]>();*/
@Output() onImageLoaded = new EventEmitter<any>();
@Output() onUndo = new EventEmitter<any>();
@Output() onRedo = new EventEmitter<any>();
@Output() onSave = new EventEmitter<string | Blob>();


  ngOnInit(){

  this.canvasOptions= {
      drawButtonEnabled: true,
     drawButtonClass: 'drawButtonClass',
      drawButtonText: 'Draw',
      clearButtonEnabled: true,
      clearButtonClass: 'clearButtonClass',
      clearButtonText: 'Clear',
      undoButtonText: 'Undo',
      undoButtonEnabled: true,
      redoButtonText: 'Redo',
      redoButtonEnabled: true,
      colorPickerEnabled: true,
      saveDataButtonEnabled: true,
      saveDataButtonText: 'Save',
      lineWidth: 4,
      scaleFactor: 1
  };
}

}








