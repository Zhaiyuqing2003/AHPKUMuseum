import { useEffect } from "react"

/**
 * A custom useEffect hook that only triggers on mounting
 * @param {Function} effect
 */
export default function useOnMountSetupEffect<T>(effect: Function) {
    useEffect(() => {
        effect();
    }, []);
}