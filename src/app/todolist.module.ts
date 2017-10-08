import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { TodoComponent } from './todolist.component';
import { TheaderComponent } from './theader/theader.component';
import { TfooterComponent } from './tfooter/tfooter.component';

@NgModule ({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ TodoComponent, TheaderComponent, TfooterComponent ],
    bootstrap: [TodoComponent]
})

export class TodoModule {
    
}
