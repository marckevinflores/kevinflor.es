import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroComponent implements OnInit, OnDestroy {

  public socialLink = [
    { name: 'facebook', link: 'https://fb.com/mkf06'},
    { name: 'github', link:'https://github.com/marckevinflores'},
    { name: 'linkedin', link: 'https://linkedin.com/in/marckevinflores'},
    { name: 'envelope', link: 'mailto:marckevinflores@gmail.com'}
  ];
  greetings: string[] = [
    'Hello, world',
    'Kamusta, mundo'
  ];
  currentGreetingIndex: number = 0;
  changingText: string = this.greetings[0];

  private intervalSubscription!: Subscription;

  ngOnInit(): void {
    this.intervalSubscription = interval(2000).subscribe(() => {
      this.updateText();
    });
  }
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
  updateText() {
    // Update the text to the next greeting in the array
    this.currentGreetingIndex = (this.currentGreetingIndex + 1) % this.greetings.length;
    this.changingText = this.greetings[this.currentGreetingIndex];
  }
}
