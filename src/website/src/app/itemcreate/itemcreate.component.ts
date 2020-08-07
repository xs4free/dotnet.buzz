import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-itemcreate',
  templateUrl: './itemcreate.component.html',
  styleUrls: ['./itemcreate.component.sass']
})
export class ItemcreateComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  item: Item;

  ngOnInit(): void {
    this.item = { } as Item;
  }

  add(title:string): void {
    title = title.trim();
    if (!title) {
      return;
    }

    this.itemService.addItem({ title } as Item)
      .subscribe(newItem => {
        this.item = newItem;
      })
  }
}
