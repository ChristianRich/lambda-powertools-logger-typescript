import { APIGatewayProxyResult } from 'aws-lambda';
import logger from '@/services/logger';
import middy from '@middy/core';
import { setLoggerContext } from '@/middleware/set-logger-context';

export const baseHandler = async (): Promise<APIGatewayProxyResult> => {
  try {
    logger.info('Invoking Lambda handler function', { data: { type: 'user' } });
    return {
      statusCode: 200,
      body: JSON.stringify({ OK: 200 }),
    };
  } catch (error) {
    const { message } = error;
    logger.error('Error Invoking Lambda handler function', {
      data: { message },
    });
    return {
      statusCode: 500,
      body: JSON.stringify({ message }),
    };
  }
};

export const handler = middy(baseHandler).use(setLoggerContext(logger));
