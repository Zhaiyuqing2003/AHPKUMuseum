import { useRef, useEffect } from "react"

/**
 * A custom useEffect hook that only triggers initially, not on every update
 * @param {Function} effect
 * @param {Array<any>} dependencies
 */
export default function useOnceEffect<T>(effect, dependencies: T[] = [], onceFunction: (dependencies: T[]) => boolean = () => true) {
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (onceFunction(dependencies) && isInitialMount) {
            isInitialMount.current = false;
            return effect(isInitialMount);
        }
    }, dependencies);
}