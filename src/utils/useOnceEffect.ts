import { useEffect } from "react";

export default (effect: React.EffectCallback) => {
    useEffect(effect, [])
}