/**
 * `1e6` by default
 */
declare const LEN_BASE: number;

/**
 * @returns `LEN_BASE * LEN_RATIO`
 */
declare const LEN: number;

/**
 * The final `LEN` will multiply by this value
 */
declare let LEN_RATIO: number;

declare const MB: number;

declare const describe: (testCase: string, fn: () => any) => void;
