import { useSpring } from '@react-spring/web';

// custom hook for animating the header title underlines of sections
const useTitleUnderlineAnimation = (inViewport) => {

    const titleUnderlineAnimation = useSpring({
        config: { tension: 280, friction: 60 },
        delay: 200,
        from: { width: '0%' },
        to: { width: '100%' },
        pause: !inViewport,
        reset: !inViewport
    });

    return {
        titleUnderlineAnimation,
    }
}

export default useTitleUnderlineAnimation;