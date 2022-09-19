import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [
    // MatAutocompleteModule,
    MatButtonModule,
    // MatButtonToggleModule,
    // MatCardModule,
    // MatCheckboxModule,
    // MatChipsModule,
    // MatDatepickerModule,
    // MatDialogModule,
    // MatExpansionModule,
    // MatGridListModule,
    // MatIconModule,
    // MatInputModule,
    // MatListModule,
    // MatMenuModule,
    // MatNativeDateModule,
    // MatPaginatorModule,
    // MatProgressBarModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    // MatRippleModule,
    // MatSelectModule,
    // MatSidenavModule,
    // MatSliderModule,
    // MatSlideToggleModule,
    // MatSnackBarModule,
    // MatSortModule,
    // MatTableModule,
    // MatTabsModule,
    // MatToolbarModule,
    // MatTooltipModule,
    // MatStepperModule,
    // ScrollingModule,
    // MatFormFieldModule,
    // ObserversModule,
];

@NgModule({
    imports: [
        ...MATERIAL_MODULES,
    ],
    exports: [
        ...MATERIAL_MODULES,
    ],
})
export class MaterialModule { }
