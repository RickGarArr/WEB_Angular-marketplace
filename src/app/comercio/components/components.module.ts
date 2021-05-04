import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
//Componentes
import { SlideMenuComponent } from './slide-menu/slide-menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { DashcardComponent } from './dashcard/dashcard.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule
    ],
    declarations: [
        SlideMenuComponent,
        ToolbarComponent,
        DashcardComponent
    ],
    exports: [
        SlideMenuComponent,
        ToolbarComponent,
        DashcardComponent
    ]
})
export class ComercioComponentsModule {}