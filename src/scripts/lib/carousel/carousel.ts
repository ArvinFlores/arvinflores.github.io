import {
  CarouselValue,
  CarouselSlideChangeEvent,
  Classnames,
  Events
} from './interfaces';

export function createCarousel (carousel: HTMLElement): CarouselValue {
  let initialized = false;
  let activeIdx = 0;
  let pos = 0;
  const indicators = carousel.querySelectorAll<HTMLButtonElement>(`.${Classnames.INDICATORS}`);
  const arrows = carousel.querySelectorAll<HTMLButtonElement>(`.${Classnames.ARROWS}`);
  const slides = carousel.querySelector<HTMLDivElement>(`.${Classnames.SLIDES}`);

  function updateIndicators (prevIdx: number, currIdx: number): void {
    indicators[prevIdx].classList.remove(Classnames.INDICATOR_ACTIVE);
    indicators[currIdx].classList.add(Classnames.INDICATOR_ACTIVE);

    activeIdx = currIdx;
  }

  function shiftSlides (prevIdx: number, currIdx: number): void {
    const diff = Math.abs(currIdx - prevIdx);
    const sliceCoords = currIdx > prevIdx ? [prevIdx, prevIdx + diff] : [prevIdx - diff, prevIdx];
    const width = Array.from(slides?.children ?? []).slice(...sliceCoords).reduce(
      (acc: number, node: HTMLDivElement) => acc += node.offsetWidth,
      0
    );

    if (currIdx < prevIdx) {
      pos -= width;
    } else {
      pos += width;
    }

    if (slides) slides.style.transform = `translateX(-${pos}px)`;
  }

  function calcNextSlidePos (direction: string): number {
    if (direction === 'left') {
      if (activeIdx === 0) {
        return indicators.length - 1;
      } else {
        return activeIdx - 1;
      }
    }

    if (activeIdx === indicators.length - 1) return 0;

    return activeIdx + 1;
  }

  function registerListeners () {
    carousel.addEventListener(Events.SLIDE_CHANGE, (e: CustomEvent<CarouselSlideChangeEvent>) => {
      const { currIdx, prevIdx } = e.detail;

      updateIndicators(prevIdx, currIdx);
      shiftSlides(prevIdx, currIdx);
    });

    indicators.forEach((indicator, i) => {
      indicator.addEventListener('click', () => {
        carousel.dispatchEvent(new CustomEvent<CarouselSlideChangeEvent>(
          Events.SLIDE_CHANGE,
          {
            detail: {
              prevIdx: activeIdx,
              currIdx: i
            }
          }
        ));
      });
    });

    arrows.forEach(arrow => {
      arrow.addEventListener('click', () => {
        carousel.dispatchEvent(new CustomEvent<CarouselSlideChangeEvent>(
          Events.SLIDE_CHANGE,
          {
            detail: {
              prevIdx: activeIdx,
              currIdx: calcNextSlidePos(arrow.getAttribute('data-direction') || '')
            }
          }
        ));
      });
    });
  }

  return {
    init () {
      if (initialized) return;

      indicators[activeIdx].classList.add('carousel__indicator--active');
      initialized = true;

      registerListeners();
    }
  };
}
