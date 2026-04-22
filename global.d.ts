/**
 * `1e6` by default
 */
declare const ITER_COUNT_BASE: number;

/**
 * @returns `ITER_COUNT_BASE * ITER_RATIO`
 */
declare const ITER_COUNT: number;

/**
 * The final `ITER_COUNT` will multiply by this value
 */
declare let ITER_RATIO: number;

declare const MB: number;

declare const kt: (filename: string, fn: () => any) => void;
