export default function addChaiAnimations() {
    const style = document.createElement("style");
    style.innerHTML = `
        @keyframes chai-fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes chai-slide-up {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        @keyframes chai-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        @keyframes chai-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
}
