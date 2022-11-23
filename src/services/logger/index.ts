import { LogFormatter, Logger } from '@aws-lambda-powertools/logger';
import { isAWS } from '../env';
import { DetailedLogFormatter } from './formatters/aws';
import { LocalhostLogFormatter } from './formatters/local';

// Log format is driven by the current runtime environment
const logFormatter: LogFormatter = isAWS()
  ? new DetailedLogFormatter() // Highly detailed logs for AWS
  : new LocalhostLogFormatter(); // Just a few key fields for localhost

const logger: Logger = new Logger({
  logFormatter,
  logLevel: process.env.LOG_LEVEL || 'DEBUG',
  serviceName: process.env.AWS_LAMBDA_FUNCTION_NAME,
});

// Singleton getter
const getLogger = (): Logger => logger;
export default getLogger();
