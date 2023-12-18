"use strict";
/**
 * Logger to parse messages or stack traces
 */
class Logger {
    /**
     * Incoming state message from construction.
     * Typically a message string or object.
     */
    payload;
    constructor(...data) {
        this.payload = data;
    }
    /**
     * Send a message to the console.
     * @param data Any incoming message to log to the console.
     * @returns `void`
     */
    static log(...data) {
        return void console.log(...data);
    }
}
// Log out a message
Logger.log("This is an example message");
