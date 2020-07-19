import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ItemService } from '../item.service';
import { Item } from '../item';

@Component({
  selector: 'app-itemcomments',
  templateUrl: './itemcomments.component.html',
  styleUrls: ['./itemcomments.component.sass']
})
export class ItemCommentsComponent implements OnInit {
  item: Item;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
      .subscribe(item => this.item = item);
  }

}
