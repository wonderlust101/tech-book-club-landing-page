// motionVariants.tsx
export const sectionVariants = {
    initial: {
        opacity: 0,
        y      : 100
    },
    animate: {
        opacity   : 1,
        y         : 0,
        transition: {
            duration: 1.15,
            ease    : "easeOut"
        }
    }
};

export const stationarySectionVariants = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity   : 1,
        transition: {
            duration: 1.15,
            ease    : "easeOut"
        }
    }
};

export const containerVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.3,
            delayChildren  : 0.3
        }
    }
};

export const childVariants = {
    initial: {
        opacity: 0,
        y      : 50
    },
    animate: {
        opacity   : 1,
        y         : 0,
        transition: {
            duration: 0.8,
            ease    : "easeOut"
        }
    }
};

// Header Animation
export const headerVariants = {
    initial: {
        opacity: 0,
        y      : -50
    },
    animate: {
        opacity   : 1,
        y         : 0,
        transition: {
            duration: 1.15,
            ease    : "easeOut"
        }
    }
};

// Viewport Animations
export const halfViewportTrigger = {
    once  : true,
    amount: 0.5
};