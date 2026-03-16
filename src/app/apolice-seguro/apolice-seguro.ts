import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  standalone: false,
  templateUrl: './apolice-seguro.html',
  styleUrl: './apolice-seguro.css',
})
export class ApoliceSeguro {
  nome = '';
  sexo = '';
  idade: number | null = null;
  valorAutomovel: number | null = null;

  valorApolice: string | null = null;
  percentualAplicado = '';

  calcularApolice(): void {
    const idade = Number(this.idade) || 0;
    const valor = Number(this.valorAutomovel) || 0;

    let percentual = 0;

    if (this.sexo === 'masculino' && idade <= 25) {
      percentual = 0.15;
    } else if (this.sexo === 'masculino' && idade > 25) {
      percentual = 0.10;
    } else if (this.sexo === 'feminino') {
      percentual = 0.08;
    }

    const apolice = valor * percentual;

    this.percentualAplicado = `${(percentual * 100).toFixed(0)}%`;
    this.valorApolice = apolice.toFixed(2);
  }

  limpar(): void {
    this.nome = '';
    this.sexo = '';
    this.idade = null;
    this.valorAutomovel = null;
    this.valorApolice = null;
    this.percentualAplicado = '';
  }
}
