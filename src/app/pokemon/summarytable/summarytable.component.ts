import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summarytable',
  templateUrl: './summarytable.component.html',
  styleUrls: ['./summarytable.component.scss'],
})
export class SummarytableComponent implements OnInit {
  @Input() inputAllPokeName: string[] = [];
  public letters: string[] = [];
  public numberLetters: number[] = [];
  ngOnInit(): void {
    setTimeout(() => this.pokemonsforItsFirstLetter(), 1000);
  }

  private pokemonsforItsFirstLetter(): void {
    const replay: any = {};
    this.inputAllPokeName.forEach(
      (poke) => (replay[poke.charAt(0)] = (replay[poke.charAt(0)] || 0) + 1)
    );

    this.sortObject(replay);
  }

  private sortObject(data: any) {
    Object.keys(data)
      .sort()
      .forEach((letter) => {
        this.letters.push(letter);
        this.numberLetters.push(data[letter]);
      });
  }
}
