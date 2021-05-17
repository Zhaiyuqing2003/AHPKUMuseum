# SET-UP PIPELINE

## FOR LOCAL PREVIEW

npx parcel serve ./src/**/*.html ./src/locales/**/*.json --dist-dir localDist

## FOR GITHUB ACTION

npx parcel build ./src/**/*.html ./src/locales/**/*.json