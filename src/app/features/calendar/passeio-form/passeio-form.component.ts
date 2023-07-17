import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StatusPasseio } from 'src/app/core/enums/status-passeio';
import { Passeio } from 'src/app/core/models/passeio';

@Component({
  selector: 'app-passeio-form',
  templateUrl: './passeio-form.component.html',
  styleUrls: ['./passeio-form.component.scss']
})
export class PasseioFormComponent {

  passeio!: FormGroup;

  constructor(private builder: FormBuilder){}

  ngOnInit(){
    this.iniciarFormulario();
  }

  iniciarFormulario(){
    this.passeio = this.builder.group({
      id: [''],
      status : [''],
      data : [''],
      horario: [''],
      usuarioId :[''],
      passeadorId : ['']
    })
  }

  salvar(){
    this.passeio.controls['status'].setValue(StatusPasseio.Pendente);
    const passeio = this.passeio.getRawValue()  as Passeio;
    console.log('Passeio salvo com sucesso: \n', passeio);
  }

}
