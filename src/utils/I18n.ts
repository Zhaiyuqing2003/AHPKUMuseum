import LanguageDetector from "i18next-browser-languagedetector";
import {
    initReactI18next
} from "react-i18next"
import i18next from "i18next";
import ChainedBackend from "i18next-chained-backend";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";

i18next
    .use(ChainedBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng : "zh-CN",
        backend : {
            backends: [
                LocalStorageBackend,
                HttpBackend
            ],
            backendOptions : [{
                expirationTime : 1000 // 1 day
            }, {
                loadPath : '/locales/{{lng}}/{{ns}}.json'
            }]
        },
        debug : true,
        interpolation : {
            escapeValue : false
        },
        detection : {
            order : ["navigator"]
        }
    })

export default i18next;


declare global{
    type I18NextResource = {
        [index in I18nLanguage]: {
            translation: {
                [index: string]: string;
            };
        };
    };
    type I18nLanguageList = ["en-US", "zh-CN", "en", "zh"]
    type I18nLanguage = I18nLanguageList[number]
}
