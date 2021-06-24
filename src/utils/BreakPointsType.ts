enum BreakPointsType{
    xs, sm, md, lg, xl,
    mobileS, mobileM, mobileL,
    tablet, laptop, desktop, fourK
}

declare global{
    type CustomBreakPointsType = BreakPointsType.mobileS | BreakPointsType.mobileM | BreakPointsType.mobileL | BreakPointsType.tablet | BreakPointsType.laptop | BreakPointsType.desktop | BreakPointsType.fourK
}


export default BreakPointsType
