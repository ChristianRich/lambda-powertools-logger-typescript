export const isLocalhost = (env: NodeJS.ProcessEnv = process.env): boolean =>
  !isAWS(env);

export const isOffline = (env: NodeJS.ProcessEnv = process.env): boolean =>
  env.IS_OFFLINE === 'true';

export const isAWS = (env: NodeJS.ProcessEnv = process.env): boolean =>
  'AWS_LAMBDA_FUNCTION_NAME' in env &&
  'LAMBDA_TASK_ROOT' in env &&
  !isOffline();

export const getNodeEnv = (
  env: NodeJS.ProcessEnv = process.env,
): string | undefined => env.NODE_ENV;
