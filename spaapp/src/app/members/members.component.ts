import { Component, OnInit, enableProdMode } from '@angular/core';


if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  screen(width) {
    return ( width < 700 ) ? 'sm' : 'lg';
  }
  constructor() { }

  ngOnInit() {
  }

}
