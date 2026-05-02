import { NgClass } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'point-card',
  imports: [NgClass],
  templateUrl: './point-card.html',
})
export class PointCard {
  readonly name = input.required<string>();
  readonly type = input.required<string>();
  readonly schedule = input.required<string>();
  readonly proximityMeters = input.required<number>();

  readonly typeName = computed(() => {
    switch (this.type()) {
      case 'glass':
        return 'Vidrio';
      case 'paper':
        return 'Papel';
      case 'containers':
        return 'Envases';
      case 'batteries':
        return 'Pilas';
      case 'clothes':
        return 'Ropa';
    }
    return null;
  });
  readonly typeClasses = computed(() => ({
    'bg-primary-container/20 text-on-primary-container': this.type() === 'glass',
    'bg-secondary-container/20 text-on-secondary-container': this.type() === 'paper',
    'bg-tertiary-container/20 text-on-tertiary-container': this.type() === 'containers',
    'bg-quaternary-container/20 text-on-quaternary-container': this.type() === 'batteries',
    'bg-quinary-container/20 text-on-quinary-container': this.type() === 'clothes',
  }));
}
