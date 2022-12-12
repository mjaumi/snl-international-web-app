import { useSpring } from '@react-spring/web';
import { useState } from 'react';

// custom hook for animating the left border of the banners
const useHeaderLeftBorderScaleAnimation = () => {
    // definition of react states here
    const [isBorderAnimDone, setIsBorderAnimDone] = useState(false);
    const [hasSwipedToSlide, setHasSwipedToSlide] = useState(false);

    const leftBorderScaleAnimation = useSpring({
        config: { duration: 1000 },
        from: { height: '0%' },
        to: { height: '100%' },
        pause: !hasSwipedToSlide,
        reset: !hasSwipedToSlide,
        onRest: () => setIsBorderAnimDone(true)
    });

    return {
        leftBorderScaleAnimation,
        setHasSwipedToSlide,
        hasSwipedToSlide,
        setIsBorderAnimDone,
        isBorderAnimDone,
    };
}

export default useHeaderLeftBorderScaleAnimation;