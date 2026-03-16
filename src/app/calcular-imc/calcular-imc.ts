import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-imc',
  standalone: false,
  templateUrl: './calcular-imc.html',
  styleUrl: './calcular-imc.css',
})
export class CalcularImc {
  peso: number | null = null;
  altura: number | null = null;

  imc: string | null = null;
  classificacao = '';

  calcularImc(): void {
    const peso = Number(this.peso) || 0;
    const altura = Number(this.altura) || 0;

    if (altura <= 0) {
      this.imc = null;
      this.classificacao = '';
      return;
    }

    const resultado = peso / (altura * altura);
    this.imc = resultado.toFixed(2);

    if (resultado < 18.5) {
      this.classificacao = 'Abaixo do peso';
    } else if (resultado < 25) {
      this.classificacao = 'Peso normal';
    } else if (resultado < 30) {
      this.classificacao = 'Sobrepeso';
    } else if (resultado < 35) {
      this.classificacao = 'Obesidade grau I';
    } else if (resultado < 40) {
      this.classificacao = 'Obesidade grau II';
    } else {
      this.classificacao = 'Obesidade grau III';
    }
  }

  limpar(): void {
    this.peso = null;
    this.altura = null;
    this.imc = null;
    this.classificacao = '';
  }
}
