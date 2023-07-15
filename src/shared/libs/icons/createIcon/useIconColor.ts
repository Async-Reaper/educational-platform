export const useIconColor = (color?: Colors) => {
    if (!color) {
        return 'var(--color-primary)';
    }

    return `var(--color-${color})`;
};
