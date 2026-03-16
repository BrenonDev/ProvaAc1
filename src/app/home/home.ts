import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  title = 'Painel de Cálculos Inteligentes';

  features = [
    {
      icon: '📘',
      title: 'Calculadora de Média',
      description: 'Informe AC1, AC2, AG e AF para calcular a média final e verificar a situação do aluno.'
    },
    {
      icon: '🚗',
      title: 'Apólice de Seguro',
      description: 'Preencha os dados do segurado e obtenha o valor da apólice com base nas regras definidas.'
    },
    {
      icon: '🌡️',
      title: 'Conversor de Temperatura',
      description: 'Converta valores em Celsius para Fahrenheit e Kelvin de maneira rápida e precisa.'
    },
    {
      icon: '⚖️',
      title: 'Calculadora de IMC',
      description: 'Descubra o índice de massa corporal e visualize a classificação correspondente.'
    }
  ];
}
