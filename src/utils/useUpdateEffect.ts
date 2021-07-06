import { useRef, useEffect } from "react"

/**
 * A custom useEffect hook that only triggers on updates, not on initial mount
 * will fire on any data update, and will fire clear up effect on will unmounting
 * empty array dependencies is not allowed, for it will make the effect useless.
 * @param {Function} effect
 * @param {Array<any>} dependencies                                                                                                                                                         
 */
export default function useUpdateEffect(effect, dependencies) {
    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            return effect();
        }
    }, dependencies);
}