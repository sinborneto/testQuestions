import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  itens: number[] = [1, 2, 3, 4, 5];
  fibonacciInput = 0;
  stringInput = '';
  result = ''

  faturamentoMensal = [
    { "dia": 1, "faturamento": 1000 },
    { "dia": 2, "faturamento": 2000 },
    { "dia": 3, "faturamento": 0 },
    { "dia": 4, "faturamento": 1500 },
    { "dia": 5, "faturamento": 0 },
    { "dia": 6, "faturamento": 2500 },
    { "dia": 7, "faturamento": 0 },
    { "dia": 8, "faturamento": 3000 },
    { "dia": 9, "faturamento": 3500 },
    { "dia": 10, "faturamento": 0 },
    { "dia": 11, "faturamento": 1000 },
    { "dia": 12, "faturamento": 2000 },
    { "dia": 13, "faturamento": 0 },
    { "dia": 14, "faturamento": 1500 },
    { "dia": 15, "faturamento": 0 },
    { "dia": 16, "faturamento": 2500 },
    { "dia": 17, "faturamento": 0 },
    { "dia": 18, "faturamento": 3000 },
    { "dia": 19, "faturamento": 3500 },
    { "dia": 20, "faturamento": 0 },
    { "dia": 21, "faturamento": 1000 },
    { "dia": 22, "faturamento": 2000 },
    { "dia": 23, "faturamento": 0 },
    { "dia": 24, "faturamento": 1500 },
    { "dia": 25, "faturamento": 0 },
    { "dia": 26, "faturamento": 2500 },
    { "dia": 27, "faturamento": 0 },
    { "dia": 28, "faturamento": 3000 },
    { "dia": 29, "faturamento": 3500 },
    { "dia": 30, "faturamento": 0 },
    { "dia": 31, "faturamento": 1600 },
  ];

  questao1 = "1) Observe o trecho de código abaixo: <br>int INDICE = 13, SOMA = 0, K = 0;<br>Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K;}<br>Imprimir(SOMA);<br>Ao final do processamento, qual será o valor da variável SOMA?"
  questao2 = "2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.<br><br>IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;"
  questao3 = "3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:<br>• O menor valor de faturamento ocorrido em um dia do mês;<br>• O maior valor de faturamento ocorrido em um dia do mês;<br>• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.<br><br>IMPORTANTE:<br>a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;<br>b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;"
  questao4 = "4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:<br>• SP – R$67.836,43<br>• RJ – R$36.678,66<br>• MG – R$29.229,88<br>• ES – R$27.165,48<br>• Outros – R$19.849,53<br><br>Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  "
  questao5 = "5) Escreva um programa que inverta os caracteres de um string.<br><br>IMPORTANTE:<br>a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;<br>b) Evite usar funções prontas, como, por exemplo, reverse;"

  metodoQuestao1() {
    const indice = 13;
    let k = 0;
    let soma = 0;
    while (k < indice) {
      k = k + 1;
      soma = soma + k;
    }
    this.result = soma.toString()
  }

  metodoQuestao2() {
    let resultMessage: string = ''; // Resultado da verificação
    let fibonacciSequence: number[] = []; // Sequência de Fibonacci gerada
    if (this.fibonacciInput === null || this.fibonacciInput < 0) {
      resultMessage = 'Por favor, insira um número válido.';
      fibonacciSequence = [];
      return;
    }

    const num = this.fibonacciInput;
    fibonacciSequence = this.generateFibonacciSequence(num);

    if (this.isFibonacci(num)) {
      resultMessage = `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
      resultMessage = `O número ${num} NÃO pertence à sequência de Fibonacci.`;
    }
    this.result = resultMessage;
  }

  isFibonacci(num: number): boolean {
    const isPerfectSquare = (x: number): boolean => {
      const s = Math.floor(Math.sqrt(x));
      return s * s === x;
    };

    return (
      isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4)
    );
  }

  generateFibonacciSequence(upTo: number): number[] {
    const sequence = [0, 1];
    while (sequence[sequence.length - 1] < upTo) {
      sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence;
  }


  metodoQuestao3() {
    let totalFaturamento = 0;
    let diasComFaturamento = 0;
    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;
  
    this.faturamentoMensal.forEach(item => {
      if (item.faturamento > 0) {
        totalFaturamento += item.faturamento;
        diasComFaturamento++;
  
        if (item.faturamento < menorFaturamento) {
          menorFaturamento = item.faturamento;
        }
        if (item.faturamento > maiorFaturamento) {
          maiorFaturamento = item.faturamento;
        }
      }
    });
  
    const mediaMensal = totalFaturamento / diasComFaturamento;
  
    let diasAcimaDaMedia = 0;
    this.faturamentoMensal.forEach(item => {
      if (item.faturamento > mediaMensal) {
        diasAcimaDaMedia++;
      }
    });
  
    this.result = `'[Menor, Maior, Média, Dias Acima da Média]:'[${menorFaturamento}, ${maiorFaturamento}, ${mediaMensal.toFixed(2)}, ${diasAcimaDaMedia}]`
  }

  metodoQuestao4() {
    const faturamentoEstados: {
      SP: number;
      RJ: number;
      MG: number;
      ES: number;
      Outros: number;
    } = {
      SP: 67836.43,
      RJ: 36678.66,
      MG: 29229.88,
      ES: 27165.48,
      Outros: 19849.53
    };
      const faturamentoTotal = Object.values(faturamentoEstados).reduce((acc, valor) => acc + valor, 0);
    
      const percentuais: { [key in keyof typeof faturamentoEstados]: number } = {} as any;
  
      for (const estado in faturamentoEstados) {
        const percentual = (faturamentoEstados[estado as keyof typeof faturamentoEstados] / faturamentoTotal) * 100;
        percentuais[estado as keyof typeof faturamentoEstados] = parseFloat(percentual.toFixed(2)); // Arredonda para 2 casas decimais
      }
      this.result = `SP: ${percentuais['SP']}; RJ: ${percentuais['RJ']}; MG: ${percentuais['MG']}; ES: ${percentuais['ES']}; Outros: ${percentuais['Outros']}`

  }

  metodoQuestao5() {

    let stringInvertida = '';
  
    for (let i = this.stringInput.length - 1; i >= 0; i--) {
      stringInvertida += this.stringInput[i]; 
    }
    
    this.result = stringInvertida;

  }

  onlyNumber(event: Event): void {
    const keyboardEvent = event as KeyboardEvent;
    const inputChar = keyboardEvent.key;
    if (!/^[0-9]$/.test(inputChar)) {
      event.preventDefault();
    }
  }

  preventPaste(event: ClipboardEvent): void {
    const clipboardData = event.clipboardData;
    const pastedText = clipboardData?.getData('text');
    if (!/^[0-9]+$/.test(pastedText || '')) {
      event.preventDefault();
    }
  }


  selecionarQuestao(questao: number): void {
    switch (questao) {
      case 1:
        this.metodoQuestao1();
        break;
      case 2:
        this.metodoQuestao2();
        break;
      case 3:
        this.metodoQuestao3();
        break;
      case 4:
        this.metodoQuestao4();
        break;
      case 5:
        this.metodoQuestao5();
        break;
      default:
        break;
    }
  }
}
