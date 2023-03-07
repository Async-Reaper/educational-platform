export const useIconColor = (color?: Colors) => {
    if (!color) {
        return '#141414';
    }

    return `var(--color-${color})`;
};
