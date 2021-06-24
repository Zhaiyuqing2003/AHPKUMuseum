import createTheme from "@material-ui/core/styles/createTheme"
import ModeType from "./ModeType"
import FontType from "./FontType"
import LanguageType from "./LanguageType"


declare module "@material-ui/core/styles"{
    interface ThemeOptions {
        appOptions : {
            modeType : ModeType,
            languageType : LanguageType
        }
    }
    interface Theme {
        appOptions : {
            modeType : ModeType,
            languageType : LanguageType
        }
    }
}

declare module "@material-ui/core/styles"{
    interface BreakpointOverrides{
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        mobileS : true,
        mobileM : true,
        mobileL : true,
        tablet: true,
        laptop: true,
        desktop: true,
        fourK : true
    }
}

function createAppTheme(modeType: ModeType, languageType: LanguageType){

    console.log("new appTheme has been created")

    const modeTypeString = modeType === ModeType.DARK ? "dark" : "light"

    let fontName: string;

    switch (languageType){
        case LanguageType.en:
        case LanguageType.en_US:
            fontName = FontType.Roboto
            break;
        case LanguageType.zh:
        case LanguageType.zh_CN:
        default:
            fontName = FontType.Roboto
            break;
    }

    return createTheme({
        components : {
            MuiCssBaseline : {
                styleOverrides : {
                    body : {
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
            mode : modeTypeString,
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
        breakpoints : {
            values : {
                xs : 0,
                sm : 600,
                md : 960,
                lg : 1280,
                xl : 1920,
                mobileS : 0,
                mobileM : 320,
                mobileL : 375,
                tablet : 425,
                laptop : 768,
                desktop : 1024,
                fourK : 1440
            }
        },
        appOptions : {
            modeType : modeType,
            languageType : languageType
        }
    })
}

export default createAppTheme;