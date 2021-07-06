import { useRef, useEffect } from "react"

/**
 * A custom useEffect hook that only triggers initially, not on every update
 * it will only fire the effect itself on mount, data change. 
 * but it will never fire the clear out effect.
 * @param {Function} effect
 * @param {Array<any>} dependencies
 * @param {Function} couldFirstUpdate
 */
function useOnceEffect<T>(effect : (isFirstEffect : React.MutableRefObject<boolean>) => void,
        dependencies: T[] = [], 
        couldFirstUpdate : (dependencies: T[]) => boolean = (dependencies: T[]) => true) : void{
    const isFirstEffect = useRef(true);

    useEffect(() => {
        if (couldFirstUpdate(dependencies) && isFirstEffect.current) {
            isFirstEffect.current = false;
            effect(isFirstEffect);
        }
    }, dependencies);
};

export default useOnceEffect;