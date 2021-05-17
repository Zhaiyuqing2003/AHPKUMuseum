# SET-UP PIPELINE

## FOR LOCAL PREVIEW

npx parcel serve ./src/**/*.html ./src/locales/**/*.json --dist-dir localDist

## GITHUB ACTION PARCEL

npx parcel build ./src/**/*.html ./src/locales/**/*.json
