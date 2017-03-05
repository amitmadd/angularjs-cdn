import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';

import { AppRoutingModule } from './app-routing.module';
import { ModuleNotFoundComponent } from './modulenotfound/module-not-found.component';
import { MessageComponent } from './message/message.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CustomPreloadStrategy } from './custom-preload-strategy';
import { CrisisCenterModule } from './crisis-center/crisis-center.module'

@NgModule({
    imports:      [ BrowserModule, CommonModule, FormsModule, HttpModule,
        DashboardModule,
        CrisisCenterModule,
        AppRoutingModule
    ],
    declarations: [ AppComponent, ModuleNotFoundComponent, MessageComponent],
    bootstrap:    [ AppComponent ],
    providers: [ CustomPreloadStrategy ]
    // entryComponents: [ DashboardModule ]
})

export class AppModule { }