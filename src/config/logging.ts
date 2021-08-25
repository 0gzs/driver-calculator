import config from './config';

const DEFAULT_NAMESPACE = config.defaults.namespace;

const info = (message: any, namespace?: string) => {
  if (typeof(message) === 'string')
  {
    console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [INFO] ${message}`);
  } else {
    console.log(`[${getDate()}] [${namespace || DEFAULT_NAMESPACE}] [INFO]`, message);
  }
};

const getDate = () => {
  return new Date().toISOString();
};

const logging = {
  info
};

export default logging;
