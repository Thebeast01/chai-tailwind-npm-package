import {chaiHoverClasses} from '../constant/hoverClasses'
export  function camelToKebab(str) {
    return str.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
}
export default function toUseHoverStyles() {
    const style = document.createElement("style");

    let css = "";

    Object.entries(chaiHoverClasses).forEach(([className, styles]) => {
        const cssClass = `.${className}:hover`;

        const styleString = Object.entries(styles)
            .map(([key, value]) => {
                return `${camelToKebab(key)}: ${value}`;
            })
            .join("; ");

        css += `${cssClass} { ${styleString}; }\n`;
    });

    style.innerHTML = css;
    document.head.appendChild(style);
}
