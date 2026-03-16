import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-temperatura',
  standalone: false,
  templateUrl: './conversor-temperatura.html',
  styleUrl: './conversor-temperatura.css',
})
export class ConversorTemperatura {
  celsius: number | null = null;
  fahrenheit = '';
  kelvin = '';

  converterTemperatura(): void {
    const c = Number(this.celsius) || 0;
    const f = (c * 9 / 5) + 32;
    const k = c + 273.15;

    this.fahrenheit = `${f.toFixed(2)} °F`;
    this.kelvin = `${k.toFixed(2)} K`;
  }

  limpar(): void {
    this.celsius = null;
    this.fahrenheit = '';
    this.kelvin = '';
  }
}
