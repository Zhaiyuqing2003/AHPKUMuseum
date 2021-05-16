import { createMuiTheme } from "@material-ui/core"
import ThemeType from "./ThemeType"

function createAppTheme(themeType: ThemeType, language: I18nLanguage){

    console.log("new appTheme has been created")

    const themeTypeString = themeType === ThemeType.DARK ? "dark" : "light"

    let fontName: string;

    switch (language){
        case "en":
        case "en-US":
            fontName = "Roboto Slab"
            break;
        case "zh":
        case "zh-CN":
            fontName = "Noto Serif SC"
            break;
        default:
            fontName = "Noto Serif SC"
            break;
    }

    return createMuiTheme({
        overrides : {
            MuiCssBaseline: {
                '@global' : {
                    body : {
                        fontSize : "1rem",
                        minWidth : 300,
                        position : "absolute",
                        top : 0,
                        left : 0,
                        right : 0
                    },
                    '::-webkit-scrollbar' : {
                        display : "none"
                    }
                }
            }
        },
        spacing : (factor) => `${0.5 * factor}rem`,
        palette : {
            type : themeTypeString,
            primary : {
                main : "#7E0A0B"
            },
            secondary : {
                main : "#F7EEDD"
            }
        },
        typography : {
            fontFamily : fontName
        },
    })
}

export default createAppTheme;

