export const useIconColor = (color?: DesignSystemColors) => {
    if (!color) {
        return 'var(--color-primary)';
    }

    return `var(--color-${color})`;
};
