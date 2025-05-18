import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  AfterViewInit,
  Component,
  effect,
  EffectRef,
  ElementRef,
  EnvironmentInjector,
  HostListener,
  inject,
  NgZone,
  OnDestroy,
  runInInjectionContext,
  signal,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-gallery',
  imports: [MatIconModule, MatButtonModule, CommonModule, NgOptimizedImage],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements AfterViewInit, OnDestroy {
  @ViewChild('slider', { read: ElementRef })
  private sliderEl!: ElementRef<HTMLDivElement>;

  readonly images = signal<string[]>([
    'assets/gallery-images/image1.png',
    'assets/gallery-images/image2.jpeg',
    'assets/gallery-images/image3.jpeg',
    'assets/gallery-images/image4.jpeg',
    'assets/gallery-images/image5.jpeg',
    'assets/gallery-images/image6.jpeg',
    'assets/gallery-images/image7.jpeg',
    'assets/gallery-images/image8.jpeg',
    'assets/gallery-images/image9.jpeg',
    'assets/gallery-images/image10.jpeg',
    'assets/gallery-images/image11.jpeg',
    'assets/gallery-images/image12.jpeg',
    'assets/gallery-images/image13.jpeg',
    'assets/gallery-images/image14.jpeg',
    'assets/gallery-images/image15.jpeg',
    'assets/gallery-images/image16.jpeg',
    'assets/gallery-images/image17.jpeg',
    'assets/gallery-images/image18.jpeg',
  ]);
  readonly currentIndex = signal(0);

  private zone = inject(NgZone);
  private injector = inject(EnvironmentInjector);
  private slideEffectCleanup: EffectRef | null = null;

  ngAfterViewInit() {
    this.startAutoEffect();
  }

  ngOnDestroy() {
    this.stopAutoEffect();
  }

  private startAutoEffect() {
    this.stopAutoEffect();
    this.zone.runOutsideAngular(() => {
      this.slideEffectCleanup = runInInjectionContext(this.injector, () =>
        effect(
          () => {
            const idx = this.currentIndex();
            this.scrollTo(idx);
            setTimeout(() => {
              const next = (idx + 1) % this.images().length;
              this.zone.run(() => this.currentIndex.set(next));
            }, 3000);
          },
          { allowSignalWrites: true }
        )
      );
    });
  }

  private stopAutoEffect() {
    this.slideEffectCleanup?.destroy();
    this.slideEffectCleanup = null;
  }

  private scrollTo(idx: number) {
    const container = this.sliderEl.nativeElement;
    const slide = container.querySelectorAll<HTMLElement>('.slide')[idx];
    if (slide) {
      container.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
    }
  }

  // only pause on hover/touch-down; do NOT resume on pointerup
  @HostListener('mouseenter')
  @HostListener('pointerdown')
  pauseAuto() {
    this.stopAutoEffect();
  }

  @HostListener('mouseleave')
  resumeAuto() {
    this.startAutoEffect();
  }

  onPrev() {
    this.pauseAuto();
    const prev =
      (this.currentIndex() - 1 + this.images().length) % this.images().length;
    this.currentIndex.set(prev);
    this.scrollTo(prev); // ← immediate manual scroll
  }

  onNext() {
    this.pauseAuto();
    const next = (this.currentIndex() + 1) % this.images().length;
    this.currentIndex.set(next);
    this.scrollTo(next); // ← immediate manual scroll
  }
}
