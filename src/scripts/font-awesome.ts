import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons/faFileSignature';
import { faFlaskVial } from '@fortawesome/free-solid-svg-icons/faFlaskVial';
import { faFileCode } from '@fortawesome/free-solid-svg-icons/faFileCode';
import { faComputer } from '@fortawesome/free-solid-svg-icons/faComputer';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';

export function initFontAwesome (): void {
  library.add(
    faAngleLeft,
    faAngleRight,
    faFileSignature,
    faFlaskVial,
    faFileCode,
    faComputer,
    faBars,
    faXmark
  );
  dom.watch();
}
