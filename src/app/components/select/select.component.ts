import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostListener,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

import { IdType, DisplayRate, Dataset, MODULE_ID } from '~/models';

@Component({
  selector: 'lab-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  @Input() data: Dataset;
  @Input() selectedId: string;
  @Input() options: string[];
  @Input() selectType = IdType.Item;
  @Input() displayRate: DisplayRate;
  @Input() includeEmptyModule: boolean;
  @Input() parent: HTMLElement;

  @Output() cancel = new EventEmitter();
  @Output() selectId = new EventEmitter<string>();

  IdType = IdType;
  MODULE_ID = MODULE_ID;

  opening = true;

  @HostBinding('style.top.px') get top() {
    return this.parent ? this.parent.getBoundingClientRect().y - 4 : -4;
  }

  @HostBinding('style.left.px') get left() {
    return this.parent ? this.parent.getBoundingClientRect().x - 13 : -4;
  }

  @HostBinding('style.width.rem')
  get width() {
    return Math.ceil(Math.sqrt(this.options.length)) * 2.25 + 1.25;
  }

  constructor(private element: ElementRef) {}

  @HostListener('document:click', ['$event'])
  click(event: MouseEvent) {
    if (this.opening) {
      this.opening = false;
    } else if (!this.element.nativeElement.contains(event.target)) {
      this.cancel.emit();
    }
  }

  clickId(id: string, event: MouseEvent) {
    this.selectId.emit(id);
    this.cancel.emit();
    event.stopPropagation();
  }

  clickCancel(event: MouseEvent) {
    this.cancel.emit();
    event.stopPropagation();
  }
}
