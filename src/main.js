import addChaiAnimations from "./helpers/addChaiAnimations";
import applyCustomClasses from "./helpers/applyCustomClasses";
import toUseHoverStyles from "./helpers/hoverStyles";
import initTiltCards from "./helpers/initTiltCards";

export function initChaiTailwind() {
    addChaiAnimations();
    applyCustomClasses();
    toUseHoverStyles();
    initTiltCards();
}
