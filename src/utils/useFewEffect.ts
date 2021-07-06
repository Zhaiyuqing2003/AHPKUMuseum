import React, { useEffect, useRef } from "react"

/**
 * A custom useEffect hook that only triggers when updating
 * @param {Function} effect
 * @param {React.DependencyList} effectDependencyList,
 * @param {Function} effectDependencyFunctions,
 * @param {number} runTimes 
 */
export default function useFewEffect<T>(
        effect: Function,
        effectDependencyList: React.DependencyList,
        effectDependencyFunctions: () => boolean = () => true,
        runTimes: number = Infinity) {

    const isInitialMount = useRef(true)
    const effectRunTimes = useRef(runTimes)

    useEffect(() => {
        if (effectDependencyFunctions){
            if (!isInitialMount.current){
                if (effectRunTimes.current !== 0){
                    effectRunTimes.current -= 1;
                    return effect()
                }
            }
        }
    }, effectDependencyList);

    useEffect(() => {
        isInitialMount.current = false
    }, [])
}
