import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  imports: [CommonModule],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss',
})
export class AboutSectionComponent {
  messages = [
    {
      title: "Founder's Message: Pramod Yadav",
      fullText: `At Om English Primary School, our vision has always been to create a warm, welcoming space where young minds feel safe to grow, explore, and dream. We believe that a child’s early years are crucial, and our school is built on the values of care, curiosity, and creativity. It gives us immense joy to watch children thrive when they are encouraged and supported at every step. Our aim is to nurture confident learners and compassionate individuals from the very beginning. Thank you for allowing us to be part of your child’s foundational journey.`,
      expanded: false,
      shortText: '',
    },
    {
      title: "Principal's Message: Ajay bagde",
      fullText: `Welcome to Om English Primary School, where every child is celebrated, and learning is made joyful. Our passionate team is dedicated to creating a nurturing environment that supports both academic and emotional development. We focus on helping children build strong values, critical thinking, and a love for learning through engaging and playful experiences. These early years are the building blocks of a successful future, and we are proud to guide our students with care and intention. We look forward to working closely with every family on this meaningful path.`,
      expanded: false,
      shortText: '',
    },
  ];

  ngOnInit() {
    const maxLength = 200;
    this.messages = this.messages.map((msg) => ({
      ...msg,
      shortText: msg.fullText.slice(0, maxLength) + '...',
    }));
  }

  toggleMessage(message: any, event: Event) {
    event.preventDefault();
    message.expanded = !message.expanded;
  }
}
