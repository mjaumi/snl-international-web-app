import { useSpring } from '@react-spring/web';

// custom hook for animating the section images
const useSectionImageAnimation = (fromAnim, toAnim, inViewport) => {

    const sectionImageAnimation = useSpring({
        delay: 300,
        from: fromAnim,
        to: toAnim,
        pause: !inViewport,
        reset: !inViewport
    });

    return {
        sectionImageAnimation,
    };
}

export default useSectionImageAnimation;