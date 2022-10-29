import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
    declarations: [
    ],
    imports: [
        //para formularios
        FormsModule,
        ReactiveFormsModule,
        //plantillas de angular
        MatButtonModule,
        MatInputModule,
        MatSlideToggleModule,
        MatProgressBarModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatDialogModule,
        
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatSlideToggleModule,
        MatProgressBarModule,
        MatToolbarModule,
        MatIconModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTableModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatDialogModule,
       
    ]
})

export class MaterialModule { }