import {chaiClasses} from '../constant/classes.ts'
export default function applyCustomClasses() {
    const style = document.createElement("style");
    let css = "";
    Object.entries(chaiClasses).forEach(([className, styles]) => {
        const cssClass = `.${className}`;

        const styleString = Object.entries(styles)
            .map(([key, value]) => `${camelToKebab(key)}: ${value}`)
            .join("; ");

        css += `${cssClass} { ${styleString}; }\n`;
    });

    style.innerHTML = css;
    document.head.appendChild(style);
}
