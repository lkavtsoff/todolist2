import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './todolist.component';
import { TheaderComponent } from './theader/theader.component';
import { TfooterComponent } from './tfooter/tfooter.component';
import { TsingleComponent } from './tsingle/tsingle.component';
import { TaboutComponent } from './tabout/tabout.component';
import { TnfComponent } from './tnf/tnf.component';
import { TlistComponent } from './tlist/tlist.component';
import { ItemService } from './todolist.service';

const appRoutes: Routes =[
    { path: '', component: TlistComponent},
    { path: 'about', component: TaboutComponent},
    { path: 'item/:id', component: TsingleComponent},
    { path: '**', component: TnfComponent }
];

@NgModule ({
    imports: [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ TodoComponent, TheaderComponent, TfooterComponent, TsingleComponent, TaboutComponent, TnfComponent, TlistComponent ],
    bootstrap: [TodoComponent],
    providers: [ItemService]
})

export class TodoModule {
    
}
