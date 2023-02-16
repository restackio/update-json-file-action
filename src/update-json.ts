import {set} from 'lodash';

const updateJson = (
  obj: Record<string, any>,
  fields: Record<string, any>
): Record<string, any> => {
  for (const [key, value] of Object.entries(fields)) {
    set(obj, key, value);
  }
  return obj;
};

export default updateJson;
