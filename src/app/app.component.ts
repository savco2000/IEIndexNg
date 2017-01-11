import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IEIndexService } from 'app/ieindex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IEIndexService]
})

export class AppComponent { 
  isUserInAdminMode: boolean = true;
}
