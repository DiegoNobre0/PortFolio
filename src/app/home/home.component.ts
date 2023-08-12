import { Component, OnInit } from '@angular/core';
import { Card } from '../model/card';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  image: any;
  textHead: any;
  textFooter: any;
  linkButton: any;

  ngOnInit(): void {
    
  }

  dataCard: Card[] = [
    { image: './assets/doctor.png', textHead: 'App to doctors', textFooter:'Aplicação web criada com o intuito de fazer o calculo para doses de medicamentos. O front-end foi criado em Angular pensando em ser prático e intuitivo para os usuários com cores suaves para passar a sensação de leveza, além de um design responsivo. O back-end foi criado em C# com uma lógica simples, mas eficaz que traz todas as funcionalidades, integrações com o front e o banco, para atender as necessidades dos clientes. O banco de dados escolhido foi o SQLServer, que traz a segurança de um dos maiores bancos para armazenar dados.', linkButton:'teste' },
    { image: './assets/family-media-plan-stepers-cadastro2.png', textHead: 'Family media plan', textFooter:'Aplicação web front-end para cadastro e manutenção de planos familiares. O usuário pode navegar entre telas e stepers criados para que o cliente possa escolher as opções que melhor lhe atendem. Com um estrutura e desing responsivos, que torna o uso intuitivo e prático para melhor atender as necessidades do cliente e sua experiência.', linkButton:'teste' },
    { image: './assets/pokedex.png', textHead: 'Pokedex', textFooter:'Pokedex desenvolvida em duas versões, uma em React e outra em Angular. Neste projeto apliquei a metodologia MobileFirst, deixando toda a aplicação responsiva para se adaptar À celulares e desktops. Sem bibliotecas, sendo todo layout aplicado apenas com o CSS e HTML puro. Requisições com o axios consumindo minha própria API desenvolvida com .NET', linkButton:'teste' },
  ];
}
