import * as core from '@actions/core';
import fs from 'fs';

import updateJson from './update-json';

async function run(): Promise<void> {
  try {
    const file = core.getInput('file', {required: true});
    const fields = core.getInput('fields', {required: true});

    let data = fs.readFileSync(file, 'utf8');
    let obj = JSON.parse(data);
    obj = updateJson(obj, JSON.parse(fields));

    data = JSON.stringify(obj, null, 2);
    fs.writeFileSync(file, data, 'utf8');
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
