import { useMediaQuery } from "@material-ui/core";
import { Theme } from "@material-ui/core";
import BreakPointsType from "./BreakPointsType";


export default function useDeviceWidthQuery(theme: Theme){

    const { down, values } = theme.breakpoints;
    const { mobileM, mobileL, tablet, laptop, desktop, fourK } = values;

    const mediaQueryList = [
        useMediaQuery(down(mobileM)),
        useMediaQuery(down(mobileL)),
        useMediaQuery(down(tablet)),
        useMediaQuery(down(laptop)),
        useMediaQuery(down(desktop)),
        useMediaQuery(down(fourK))
    ]
    
    const returnList: CustomBreakPointsType[] = [
        BreakPointsType.mobileS,
        BreakPointsType.mobileM,
        BreakPointsType.mobileL,
        BreakPointsType.tablet,
        BreakPointsType.laptop,
        BreakPointsType.desktop
    ]

    for (let [index, queryInfo] of mediaQueryList.entries()){
        if (queryInfo){
            return returnList[index]
        }
    }

    return BreakPointsType.desktop
}