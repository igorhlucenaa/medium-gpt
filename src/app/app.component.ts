import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pergunta!: string;
  public resposta!: string;

  constructor(private http: HttpClient) { }

  fazerPergunta() {
    const apiUrl = 'http://localhost:3000/completions';
    this.http.post(apiUrl, { prompt: this.pergunta })
      .subscribe((res: any) => {
        this.resposta = res;
      }, (err) => {
        console.error(err);
      });
  }
}
