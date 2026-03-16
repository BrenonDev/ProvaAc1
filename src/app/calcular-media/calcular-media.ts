import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  standalone: false,
  templateUrl: './calcular-media.html',
  styleUrl: './calcular-media.css',
})

export class CalcularMedia {
  ac1: number | null = null;
  ac2: number | null = null;
  ag: number | null = null;
  af: number | null = null;

  mediaFinal: string | null = null;
  situacao = '';
  aprovado = false;

  calcularMedia(): void {
    const notaAc1 = Number(this.ac1) || 0;
    const notaAc2 = Number(this.ac2) || 0;
    const notaAg = Number(this.ag) || 0;
    const notaAf = Number(this.af) || 0;

    const media = (notaAc1 * 0.15) + (notaAc2 * 0.30) + (notaAg * 0.10) + (notaAf * 0.45);

    this.mediaFinal = media.toFixed(2);
    this.aprovado = media >= 5;
    this.situacao = this.aprovado ? 'Aprovado' : 'Reprovado';
  }

  limpar(): void {
    this.ac1 = null;
    this.ac2 = null;
    this.ag = null;
    this.af = null;
    this.mediaFinal = null;
    this.situacao = '';
    this.aprovado = false;
  }
}
