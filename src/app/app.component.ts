import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  optionsCmp: Option[] = [
    {
      name: 'schere',
      img: 'assets/scissors.png',
      visible: false,
    },
    {
      name: 'stein',
      img: 'assets/stone.webp',
      visible: false,
    },
    {
      name: 'papier',
      img: 'assets/paper.png',
      visible: false,
    }
  ];
  optionsPlayer: Option[] = [
    {
      name: 'schere',
      img: 'assets/scissors.png',
      visible: false,
    },
    {
      name: 'stein',
      img: 'assets/stone.webp',
      visible: false,
    },
    {
      name: 'papier',
      img: 'assets/paper.png',
      visible: false,
    }
  ];
  playersChoice: Option;
  computersChoice: Option;
  winner = undefined;
  gameFinished: boolean;
  playerCanClick = true;


  ngOnInit(): void {
  }

  reset(): void {
    this.playerCanClick = true;
    this.playersChoice = undefined;
    this.computersChoice = undefined;
    this.gameFinished = false;
    this.winner = undefined;
    this.optionsCmp.forEach((item) => item.visible = false);
    this.optionsPlayer.forEach((item) => item.visible = false);
  }

  startGame(option): void {
    if (this.playerCanClick){
      this.playersChoice = option;
      this.playerCanClick = false;
      this.computersChoice = this.optionsCmp[Math.floor(Math.random() * this.optionsCmp.length)];
      this.toggleImages();
      setTimeout(() => {
        this.playersChoice.visible = true;
        this.computersChoice.visible = true;
      }, 1400);
      setTimeout(() => {
        this.checkWinner();
        this.gameFinished = true;
      }, 1600);
    }
  }



  checkWinner(): void {
    if (this.computersChoice.name === this.playersChoice.name) {
      this.winner = 'Unentschieden';
    } else if (
      this.computersChoice.name === 'schere' && this.playersChoice.name === 'papier' ||
      this.computersChoice.name === 'stein' && this.playersChoice.name === 'schere' ||
      this.computersChoice.name === 'papier' && this.playersChoice.name === 'stein'
    ) {
      this.winner = 'Computer gewinnt!';
    } else {
      this.winner = 'Du gewinnst!';
    }
  }

  toggleImages(): void {
    const a1 = this.optionsCmp;
    const a2 = this.optionsPlayer;

    setTimeout(() => {
      a1[0].visible = true;
      a2[0].visible = true;
    }, 200);

    setTimeout(() => {
      a1[0].visible = false;
      a2[0].visible = false;
    }, 400);

    setTimeout(() => {
      a1[1].visible = true;
      a2[1].visible = true;
    }, 600);

    setTimeout(() => {
      a1[1].visible = false;
      a2[1].visible = false;
    }, 800);

    setTimeout(() => {
      a1[2].visible = true;
      a2[2].visible = true;
    }, 1000);

    setTimeout(() => {
      a1[2].visible = false;
      a2[2].visible = false;
    }, 1200);
  }
}

interface Option {
  name: string;
  img: string;
  visible: boolean;
}


/*

 */
