export default function applyTilt3D(element) {
    const intensity = 15;

    element.addEventListener("mousemove", (e) => {
        const rect = element.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const percentX = x / rect.width;
        const percentY = y / rect.height;

        const rotateY = (percentX - 0.5) * intensity * 2;
        const rotateX = (0.5 - percentY) * intensity * 2;

        const scale = 1.06;

        element.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(${scale})
        `;

        const glowX = percentX * 100;
        const glowY = percentY * 100;

        element.style.background = `
            radial-gradient(
                circle at ${glowX}% ${glowY}%,
                rgba(255,255,255,0.15),
                transparent 60%
            )
        `;
    });

    element.addEventListener("mouseleave", () => {
        element.style.transform = `
            perspective(1000px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;

        element.style.background = "";
    });
}
