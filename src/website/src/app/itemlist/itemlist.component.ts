import { Component, OnInit } from '@angular/core';
import { ITEMS } from "../mock-items";
import { Item } from "../item";
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.sass']
})
export class ItemlistComponent implements OnInit {
  items = ITEMS;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;

  constructor() { }

  ngOnInit(): void {
  }

  onVoteUp(item: Item): void {
    item.upVotes++;
  }

  onVoteDown(item: Item): void {
    item.upVotes--;
  }
}
