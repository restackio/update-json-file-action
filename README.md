# GitHub Action - Update JSON File
This GitHub Action edits the provided fields on a provided JSON file

## Usage

Add this step in your workflow file
```yaml
- name: Update my-file.json description
  uses: restack/update-json-file-action@v1.1
  with:
    file: my-file.json
    fields: "{'a.b.c': 'value_here', 'a.b.d[0]': 'value_here'}"
```

### Input Variables

- `file`: File name/path to edit. e.g `package.json`
- `fields`: Fields to edit. can be nested fields. example: `{'a.b.c[0]': 'value_here', 'z.x': 'value_here'}`


#### Example - Updating `package.json` Version

```yaml
name: Build and Release

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

env:
  GITHUB_TOKEN: ${{ github.token }}

jobs:
  build:
    name: Build and Release
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
    - uses: actions/checkout@v3
 
    - name: Update package.json version
      uses: restackio/update-json-file-action@v1.1
      with:
        file: package.json
        fields: "{'version': '1.2.4'}"
```
