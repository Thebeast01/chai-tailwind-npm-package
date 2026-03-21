import applyTilt3D from "./applyTiltAnimations";

export default function initTiltCards() {
    const cards = document.querySelectorAll(".chai-tilt-3d");
    cards.forEach(card => applyTilt3D(card))
}
