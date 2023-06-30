import { Component, OnInit } from '@angular/core';
import { ApiService } from '../app/services/api.service.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'app-root',
	templateUrl: '/app.component.html',
	styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
	public foto1: string = "";
	public foto2: string = "";
	public foto3: string = "";
	public foto4: string = "";
	public foto5: string = "";
	public foto6: string = "";

	constructor(private apiService: ApiService) { }

	ngOnInit() {
		setTimeout(async () => {
		  this.foto1 = await this.getCao();
		  this.foto2 = await this.getCao();
		  this.foto3 = await this.getCao();
		  this.foto4 = await this.getCao();
		  this.foto5 = await this.getCao();
		  this.foto6 = await this.getCao();
		});
	  }

	public async getCao() {
		try {
			const data = await this.apiService.getCao().toPromise();
			return data.message;
		} catch (error: any) {
			console.error('Ocorreu um erro ao pegar a imagem do cachorro', error);
			return error.toString();
		}
	}
}