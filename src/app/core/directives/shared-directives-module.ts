import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphaNumericOnlyDirective } from './alpha-numeric-only.directive';
import { AlphabetsOnlyDirective } from './alphabets-only.directive';
import { DecimalOnlyDirective } from './decimal-only.directive';
import { NoDuplicateDirective } from './no-duplicate-digit.directive';
import { NoSpecialCharacterDirective } from './no-special-character.directive';
import { NumberDirective } from './numbers-only.directive';
import { ProductSortDirective } from './product-sort.directive';
 
@NgModule({
  declarations: [
    AlphaNumericOnlyDirective,
    AlphabetsOnlyDirective,
    DecimalOnlyDirective,
    NoDuplicateDirective,
    NoSpecialCharacterDirective,
    NumberDirective,
    ProductSortDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    AlphaNumericOnlyDirective,
    AlphabetsOnlyDirective,
    DecimalOnlyDirective,
    NoDuplicateDirective,
    NoSpecialCharacterDirective,
    NumberDirective,
    ProductSortDirective,
  ]
})
export class SharedDirectivesModule { }