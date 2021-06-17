import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'Assignment';

  constructor (private httpService: HttpClient){ }

  arrCList: string[] = [];

  ngOnInit(){
    this.httpService.get('./assets/sample_node_tree_data.txt').subscribe(
      data => {
        this.arrCList = data as string []; // FILL THE ARRAY WITH DATA.
        console.log(this.arrCList[1]);
      },

      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
