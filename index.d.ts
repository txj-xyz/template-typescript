/**
 * Logger to parse messages or stack traces
 */
declare class Logger {
    /**
     * Incoming state message from construction.
     * Typically a message string or object.
     */
    payload: any[];
    constructor(...data: any[]);
    /**
     * Send a message to the console.
     * @param data Any incoming message to log to the console.
     * @returns `void`
     */
    static log(...data: any[]): void;
}
