import { Component } from '@angular/core';

@Component({
     selector: 'app-lucky-message-generator',
     templateUrl: './lucky-message-generator.component.html',
     styleUrls: ['./lucky-message-generator.component.scss']
})
export class LuckyMessageGeneratorComponent {
     public message: any[] = [
          'Wishing you all a very happy New Year! ...',
          "Here's wishing you all a very happy New Year, from our family to yours!",
          'Wish you a sparkling New Year! ...',
          "Here's to new beginnings in 2023! ...",
          'This new year, I wish you to embark on new adventures.',
          ' May this new year 2023 bless you and your loved ones with good health, wealth, and happiness. Happy New Year!',
          "Last year you achieved so much, and I’m so proud of you! Here's wishing you another 365 days full of success.",
          ' Here’s to a new year that is full of happiness and unforgettable memories! Wish you a very happy new year!',
          'Happy New Year!',
          "Here's wishing you a very happy New Year which is full of positivity and hope! Happy 2023!",
          'This year I wish you a happy 2023!',
          ' May this new year bring you more success and happiness! Happy New Year 2023!',
          ' Hey buddy, happy New Year to you!',
          "Happy New Year to you, my friend. Let's make more fun-filled memories this year too!",
          "Here's hoping that 2023 is also as eventful as 2022 for you. Happy New Year to you and your family!",
          'Have a great day and a wonderful year ahead. Happy New Year 2023!',
          'Cheers to a New Year! Happy 2023!'
     ];

     public realMessage: string = '';

     public play() {
          let min = 0;
          let max = 16;
          var randomNumber = Math.floor(Math.random() * (max - min) + min);
          this.realMessage = this.message[randomNumber];
     }
}
