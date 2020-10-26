import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { RikComponent } from './rik.component';

@NgModule({
  imports: [BrowserModule, NgbModule],
  declarations: [RikComponent],
  exports: [RikComponent],
  bootstrap: [RikComponent]
})
export class RikModule { }