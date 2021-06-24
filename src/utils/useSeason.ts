import SeasonType from "../utils/SeasonType"

export default function(){
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();

    switch (month){
        case 0:
            return SeasonType.Winter;
        case 1:
            if (day < 3){
                return SeasonType.Winter
            } else {
                return SeasonType.Spring
            }
        case 2:
        case 3:
            return SeasonType.Spring
        case 4:
            if (day < 5){
                return SeasonType.Spring
            } else {
                return SeasonType.Summer
            }
        case 5:
        case 6:
            return SeasonType.Summer
        case 7:
            if (day < 6){
                return SeasonType.Summer
            } else {
                return SeasonType.Autumn
            }
        case 8:
        case 9:
            return SeasonType.Autumn
        case 10:
            if (day < 7){
                return SeasonType.Autumn
            } else {
                return SeasonType.Winter
            }
        case 11:
            return SeasonType.Winter;
    }
}


