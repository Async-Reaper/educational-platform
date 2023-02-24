// eslint-disable-next-line @typescript-eslint/naming-convention
export type themeColor = 'violet-primary';

export const commonBreakpoints = {
  xs: '375px',
  sm: '425px',
  md: '768px',
  lg: '1024px',
  xl: '1440px',
  xxl: '2560px',
};

export const theme = {
  space: ['0px', '10px', '15px', '20px', '25px', '30px', '35px'],
  fontSizes: ['14px', '16px', '18px', '24px'],
  radii: ['0px', '5px', '10px', '15px', '20px'],
  breakpoints: [
    commonBreakpoints.xs,
    commonBreakpoints.sm,
    commonBreakpoints.md,
    commonBreakpoints.lg,
    commonBreakpoints.xl,
    commonBreakpoints.xxl,
  ],
};
