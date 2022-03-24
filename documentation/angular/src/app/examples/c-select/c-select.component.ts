import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-select',
  templateUrl: './c-select.component.html',
  styleUrls: ['./c-select.component.scss'],
})
export class CSelectComponent implements OnInit {
  examples = [
    `<c-select
    cControl
    label="Your favorite fruit"
    return-value
    [items]="items"
    [(ngModel)]="basicValue"
    placeholder="Select a fruit"
  ></c-select>

  <p>Selected fruit: {{ basicValue || 'None' }}</p>`,
    `<c-select
  shadow
  cControl
  [items]="items"
  [(ngModel)]="value"
  placeholder="Select a fruit"
></c-select>
<p>Selected fruit: {{ (value | json) || 'None' }}</p>`,
    `<c-select
  required
  cControl
  [itemsPerPage]="4"
  [items]="items"
  [(ngModel)]="value"
  placeholder="Select a fruit"
></c-select>
<p>Selected fruit: {{ (value | json) || 'None' }}</p>`,
  ];
  script = `value = null;
items = [
  {
    name: 'Banana',
    value: 'banana',
  },
  {
    name: 'Pineapple',
    value: 'pineapple',
  },
  {
    name: 'Apple',
    value: 'apple',
  },
  {
    name: 'Orange',
    value: 'orange',
  },
  {
    name: 'Pear',
    value: 'pear',
  },
  {
    name: 'Lemon',
    value: 'lemon',
  },
];`;
  basicValue = null;
  value = null;
  items = [
    {
      name: 'Banana',
      value: 'banana',
    },
    {
      name: 'Pineapple',
      value: 'pineapple',
    },
    {
      name: 'Apple',
      value: 'apple',
    },
    {
      name: 'Orange',
      value: 'orange',
    },
    {
      name: 'Pear',
      value: 'pear',
    },
    {
      name: 'Lemon',
      value: 'lemon',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
