import logger from '@/utils/logger.js';

export const loggerMixin = {
    methods: {
        log(message, level = 'info') {
            logger(message, level);
        }
    }
};