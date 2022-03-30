import { Component, OnInit } from '@angular/core';
import { GUser } from '../../models/ghUsers';
import { GhApiService } from '../../services/gh-api.service';
import { Repository} from '../../models/repositorio';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

    username:string='';
    avatar:string='';
    foto:GUser | null = null;
    user:GUser | null = null;
    lista: Repository <any> []

  constructor(
    private ghService: GhApiService
  ) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe((gUser) => {
      this.user = gUser
    })
    

    this.ghService.fRepo(this.username).subscribe((repo) => {
      this.lista = repo
  })
  }
}
