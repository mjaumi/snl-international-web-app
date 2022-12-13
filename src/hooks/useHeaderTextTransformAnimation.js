import { useSpring } from '@react-spring/web';
import { useState } from 'react';

// custom hook for animating the header text of the banners
const useHeaderTextTransformAnimation = (isBorderAnimationDone, delay) => {
    // definition of react states here
    const [hasSwipedToSlide, setHasSwipedToSlide] = useState(false);
    const [hasAnimRestarted, setHasAnimRestarted] = useState(false);

    const HeaderTextTransformAnimation = useSpring({
        config: { tension: 80, friction: 40 },
        delay: delay,
        from: { x: '-100%' },
        to: { x: !hasSwipedToSlide ? '-100%' : '0%' },
        pause: (isBorderAnimationDone && hasSwipedToSlide) ? false : true,
        reset: !hasSwipedToSlide,
        onStart: () => setHasAnimRestarted(true)
    });

    return {
        HeaderTextTransformAnimation,
        hasAnimRestarted,
        setHasAnimRestarted,
        setHasSwipedToSlide
    }
}

export default useHeaderTextTransformAnimation;