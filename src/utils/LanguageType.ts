enum LanguageType{
    zh_CN = "zh-CN",
    zh = "zh",
    en_US = "en-US",
    en = "en"
}

declare global{
    type I18NextResource = {
        [index in LanguageType]: {
            translation: {
                [index: string]: string;
            };
        };
    };
}

export default LanguageType;