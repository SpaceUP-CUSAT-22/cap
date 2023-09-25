import React, {Fragment, useEffect} from 'react';
import anime from 'animejs/lib/anime.es.js';

const Loader = ({text}) => {

    useEffect(() => {
        const svgPath = document.querySelectorAll('.path');

        const svgText = anime({
            targets: svgPath,
            loop: true,
            direction: 'alternate',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 700,
            delay: (el, i) => i * 500,
        });

        // Clean up the animation when the component unmounts
        return () => {
            svgText.pause();
            svgText.reset();
        };
    }, []);

    return (
        <Fragment>
            <div className="flex justify-center items-center">
                <div className="flex justify-center">
                    <svg viewBox="0 0 2320 300">
                        <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                            {text}
                        </text>
                    </svg>
                </div>
            </div>
        </Fragment>
    );
};

export default Loader;
