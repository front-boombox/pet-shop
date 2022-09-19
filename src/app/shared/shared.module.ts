import {
    CommonModule, CurrencyPipe, DatePipe, DecimalPipe, PercentPipe
} from '@angular/common';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material/material.module';

// const ENTRY_COMPONENTS = [
//     SelectDialogComponent,
//     MSRCardDialogComponent,
//     VoidReasonComponent,
// ];

// DO NOT INCLUDE ENTRY COMPONENTS HERE. INCLUDE IT IN ENTRY_COMPONENTS ARRAY
// const COMPONENTS = [
    // ...ENTRY_COMPONENTS,
// ];

// const DIRECTIVES = [
    // FocusChangeValidationDirective,
    // ClearButtonDirective,
// ];

@NgModule({
    declarations: [
        // ...COMPONENTS,
        // ...DIRECTIVES,
    ],
    entryComponents: [
        // ENTRY_COMPONENTS,
    ],
    exports: [
        CommonModule,
        MaterialModule,
        TranslateModule,
        // ...COMPONENTS,
        // ...DIRECTIVES,
    ],
    // DO NOT INCLUDE PROVIDERS HERE. INCLUDE PROVIDES IN forRoot METHOD IN SharedModule CLASS
    imports: [
        MaterialModule,
        TranslateModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
})
export class SharedModule {
    public static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            // providers: [
            //     DecimalPipe,
            //     DatePipe,
            //     CurrencyPipe,
            //     PercentPipe,
            // ],
        };
    }
}
