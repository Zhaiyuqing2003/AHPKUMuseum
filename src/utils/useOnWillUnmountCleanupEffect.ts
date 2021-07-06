import { EffectCallback, useEffect } from "react"

/**
 * A custom useEffect hook that only triggers on will unmounting.
 * @param {Function} cleanUpEffect
 */
export default function useOnWillUnmountCleanupEffect<T>(cleanUpEffect) {
    useEffect(() => {
        return cleanUpEffect
    }, []);
}