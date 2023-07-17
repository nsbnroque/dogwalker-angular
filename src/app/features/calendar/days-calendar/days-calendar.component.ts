import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { StatusPasseio } from 'src/app/core/enums/status-passeio';
import { Passeio } from 'src/app/core/models/passeio';

@Component({
  selector: 'app-days-calendar',
  templateUrl: './days-calendar.component.html',
  styleUrls: ['./days-calendar.component.scss']
})
export class DaysCalendarComponent {
  dataAtual: Date = new Date();
  diasCalendario: Date[] = [];
  @Input() mesSelecionado!: number;
  diaSelecionado: Date = new Date();
  @Input() novoMes! : number;
  @Output() selectDay : EventEmitter<any> = new EventEmitter<any>();
  iconUrl!: SafeResourceUrl;
  passeios!: Passeio[];

  constructor(private sanitizer: DomSanitizer){
  }

  ngOnInit() {
    this.iconUrl = this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/pet_icon.svg');
    this.construirCalendario();
    this.passeios = this.criarMockPasseios();

    if(this.mesSelecionado === undefined){
      let dia = new Date();
      this.mesSelecionado = dia.getMonth();
    }
    
  }
  
  ngDoCheck() {
    // console.log("DENTO DO DOCHECK", this.novoMes);
    if (this.mesSelecionado !== this.novoMes) {
      this.construirCalendario();
    }
  }

  construirCalendario() {
    let mes;
      if (this.novoMes|| this.novoMes === 0) {
        mes = this.novoMes;
        this.mesSelecionado = this.novoMes;
      } else {
        mes = this.dataAtual.getMonth();
      }
      const ano = this.dataAtual.getFullYear();

    const primeiroDiaDaSemana = 0; // domingo
    const ultimoDiaDaSemana = 6; // sábado

    // Subtrai -1 até chegar no primeiro dia da semana
    const dataInicial = new Date(ano, mes, 1);
    while (dataInicial.getDay() !== primeiroDiaDaSemana) {
      dataInicial.setDate(dataInicial.getDate() - 1);
    }

    // Soma +1 até chegar no último dia da semana
    const dataFinal = new Date(ano, mes + 1, 0);
    while (dataFinal.getDay() !== ultimoDiaDaSemana) {
      dataFinal.setDate(dataFinal.getDate() + 1);
    }

    this.diasCalendario = [];
    for (
      let data = new Date(dataInicial.getTime());
      data <= dataFinal;
      data.setDate(data.getDate() + 1)
    ) {
      this.diasCalendario.push(new Date(data.getTime()));
    }
  }

  selecionarDia(dia:any){
    if (dia.getMonth() === this.mesSelecionado) {
      this.diaSelecionado = dia;
      this.selectDay.emit(dia);
    }
  }

  isCurrentMonth(dia: Date): boolean {
    const mesDia = dia.getMonth();
    return mesDia === this.mesSelecionado;
  }

  isSelectedDay(dia: Date): boolean {
    return dia.toDateString() === this.diaSelecionado.toDateString();
  }

  isConditionMet(dia: Date): boolean {
    const isSunday = dia.getDay() === 0;
  
    return !isSunday;
  }

  getIconColor(status: string): string {
    switch (status) {
      case 'confirmado':
        return '#8fc82c'; // verde menta
      case 'cancelado':
        return '#C54B6C'; // muted red
      case 'pendente':
        return '#E8D595'; // amarelo
      case 'passado':
        return 'lightgray'; // cinza
      default:
        return '';
    }
  }

  criarMockPasseios(): Passeio[] {
    const passeios: Passeio[] = [];
    const mesAtual = new Date().getMonth();
    const anoAtual = new Date().getFullYear();
  
    let data = new Date(anoAtual, mesAtual, 1);
  
    while (passeios.length < 20) {
      if (data.getDay() !== 0) {
        let dataPasseio = new Date(data.getTime());
        const passeio: Passeio = {
          status: (dataPasseio < new Date()) ? StatusPasseio.Passado : this.gerarStatusAleatorio(),
          data: dataPasseio,
        };
        passeios.push(passeio);
      }
      data.setDate(data.getDate() + 1);
    }
  
    return passeios;
  }
  
   gerarStatusAleatorio(): string {
    const statusValues = Object.values(StatusPasseio).filter(status => status !== StatusPasseio.Passado);
    const randomIndex = Math.floor(Math.random() * statusValues.length);
    return statusValues[randomIndex];
  }

  getPasseiosPorData(data: Date): Passeio[] {
    return this.passeios.filter(passeio => passeio.data.toDateString() === data.toDateString());
  }
}
