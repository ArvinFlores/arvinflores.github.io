export interface CarouselValue {
  init: () => void;
}

export interface CarouselSlideChangeEvent {
  prevIdx: number;
  currIdx: number;
}

export enum Classnames {
  INDICATORS = 'carousel__indicator',
  ARROWS = 'carousel__arrow',
  SLIDES = 'carousel__slides',
  INDICATOR_ACTIVE = 'carousel__indicator--active'
}

export enum Events {
  SLIDE_CHANGE = 'slide:change'
}

export enum Config {
  SLIDE_TRANSITION_DURATION_MS = 500
}
