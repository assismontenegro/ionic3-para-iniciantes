import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo:"Assis Rubens",
    data: "Novembro 5, 1955",
    descricao: "Estou criando um app incrível",
    qntd_like: 12 ,
    qtnd_comentarios: 4,
    time_comment: "11h ago"
  }

  public nome_usuario: string = "Charles do Código";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {
  }
  public somaDoisNumeros (num1:number, num2:number): void {
   //alert( num1 + num2 );
    
  }
  ionViewDidLoad() {
   this.movieProvider.getLatesMovies().subscribe(
    data=>{
         console.log(data);
      }, error => {
         console.log(error);
    }
  )
  }

}
