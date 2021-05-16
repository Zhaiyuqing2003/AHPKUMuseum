import ThemeType from "./ThemeType"

//@ts-ignore
import WebsiteIconLightHref from "../icons/indexLight.svg"
//@ts-ignore
import WebsiteIconDarkHref from "../icons/indexDark.svg"

const WEBSITE_ICON_HREF = {
    LIGHT : WebsiteIconLightHref,
    DARK : WebsiteIconDarkHref
} as const;

export default function changeWebIconTheme(themeType: ThemeType){
    const iconHref = WEBSITE_ICON_HREF[themeType === ThemeType.LIGHT ? "LIGHT" : "DARK"]

    const iconElement = document.querySelector("link[rel=icon]") as HTMLLinkElement | null;

    if (iconElement !== null){
        iconElement.href = iconHref
    } else {
        const newIconElement = document.createElement("link");
        newIconElement.rel = "icon";
        newIconElement.href = iconHref;
        document.head.appendChild(newIconElement)
    }
}