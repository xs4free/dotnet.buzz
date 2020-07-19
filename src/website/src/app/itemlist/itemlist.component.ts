import { Component, OnInit } from '@angular/core';
import { ItemService } from "../item.service";
import { Item } from "../item";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.sass']
})
export class ItemlistComponent implements OnInit {
  items: Item[];
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  constructor(private itemService: ItemService) {}

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

  ngOnInit(): void {
    this.getItems();
  }

  onVoteUp(item: Item): void {
    item.upVotes++;
  }

  onVoteDown(item: Item): void {
    item.upVotes--;
  }
}
