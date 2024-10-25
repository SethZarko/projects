export default function logger(message, level = 'info') {
    const timestamp = new Date().toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
    });
    
    switch (level) {
        case 'info':
            console.info(`[INFO]: [${timestamp}]: ${message}`);
            break;
        case 'warn':
            console.warn(`[WARN]: [${timestamp}]: ${message}`);
            break;
        case 'error':
            console.error(`[ERROR]: [${timestamp}]: ${message}`);
            break;
        default:
            console.log(`[DEFAULT LOG]: [${timestamp}]: ${message}`);
    }
}