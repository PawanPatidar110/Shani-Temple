
import React, { useEffect } from 'react';
import Leaves1 from '../assets/leaves/leave1.png';
import Leaves2 from '../assets/leaves/leave2.png';
import Leaves3 from '../assets/leaves/leave3.png';
import Leaves4 from '../assets/leaves/leave4.png';

const FallingLeaves = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fall {
                0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
                10% { opacity: 1; }
                100% { transform: translateY(0) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        const count = 30;
        const container = document.getElementById('leaf-container');

        const flowerImages = [Leaves1, Leaves2, Leaves3, Leaves4];

        for (let i = 0; i < count; i++) {
            const leaf = document.createElement('div');
            const randomImage = flowerImages[Math.floor(Math.random() * flowerImages.length)];

            Object.assign(leaf.style, {
                position: 'absolute',
                width: '40px',
                height: '40px',
                top: `-${Math.random() * 100}px`,
                left: `${Math.random() * 100}vw`,
                backgroundImage: `url('${randomImage}')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                opacity: '0.95',
                filter: 'brightness(1.4)',
                animationName: 'fall',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                animationDuration: `${5 + Math.random() * 5}s`,
                animationDelay: `${Math.random() * 5}s`,
                pointerEvents: 'none',
                zIndex: '10',
                boxShadow: '0 0 8px rgba(255, 255, 255, 0.3)', // Optional glow
            });

            container.appendChild(leaf);
        }

        return () => {
            container.innerHTML = '';
            document.head.removeChild(style);
        };
    }, []);

    return (
        <div
            id="leaf-container"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                overflow: 'hidden',
                zIndex: 10,
            }}
        />
    );
};

export default FallingLeaves;



// import React, { useEffect } from 'react';
// import Leaves1 from '../assets/leaves/leave1.png';
// import Leaves2 from '../assets/leaves/leave2.png';
// import Leaves3 from '../assets/leaves/leave3.png';
// import Leaves4 from '../assets/leaves/leave4.png';

// const FallingLeaves = () => {
//     useEffect(() => {
//         const style = document.createElement('style');
//         style.innerHTML = `
//             @keyframes fall {
//                 0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
//                 10% { opacity:1; }
//                 100% { transform: translateY(0) rotate(360deg); opacity: 0; }
//             }
//         `;
//         document.head.appendChild(style);

//         const count = 30;
//         const container = document.getElementById('leaf-container');

//         const flowerImages = [
//             Leaves1,
//             Leaves2,
//             Leaves3,
//             Leaves4
//         ];

//         for (let i = 0; i < count; i++) {
//             const leaf = document.createElement('div');
//             const randomImage = flowerImages[Math.floor(Math.random() * flowerImages.length)];

//             Object.assign(leaf.style, {
//                 position: 'absolute',
//                 width: '40px',
//                 height: '40px',
//                 top: `-${Math.random() * 100}px`,
//                 left: `${Math.random() * 100}vw`,
//                 backgroundImage: `url('${randomImage}')`,
//                 backgroundRepeat: 'no-repeat',
//                 backgroundSize: 'contain',
//                 opacity: '0.8',
//                 animationName: 'fall',
//                 animationTimingFunction: 'linear',
//                 animationIterationCount: 'infinite',
//                 animationDuration: `${5 + Math.random() * 5}s`,
//                 animationDelay: `${Math.random() * 5}s`,
//                 pointerEvents: 'none',
//                 zIndex: '10',
//             });
//             container.appendChild(leaf);
//         }

//         return () => {
//             container.innerHTML = '';
//             document.head.removeChild(style);
//         };
//     }, []);

//     return (
//         <div
//             id="leaf-container"
//             style={{
//                 position: 'fixed',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 height: '100%',
//                 pointerEvents: 'none',
//                 overflow: 'hidden',
//                 zIndex: 10,
//             }}
//         />
//     );
// };

// export default FallingLeaves;


