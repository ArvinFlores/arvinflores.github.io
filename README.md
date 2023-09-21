# ammaTek website

Business website available at [https://www.ammatek.com](https://www.ammatek.com)

## Development

### Project setup

Open up a terminal window and clone the repo into your desired folder

```
git clone git@github.com:ArvinFlores/arvinflores.github.io.git
```
then install the dependencies by running:
```
npm install
```

### Start the dev server
To start the development server on port 7777
```
npm start
```
You should now be able to access the dev website on `http://localhost:7777`

## Production

### Create prod bundle

To create a production bundle run the following:
```
npm run build
```
This will place all of the production assets into the `public/` directory

You will then have to push the new changes to github ie: `git add public/ && git commit -m 'update website' && git push`

Note: The assets are all hashed to take advantage of browser caching and will only change when the actual content of the file changes

### Publishing changes to website

There is a github workflow declared for this project at `.github/workflows/static.yml` that will kick off a new workflow anytime there are new assets generated for the `public/` directory (as a result of `npm run build`) and pushed to the repo. The build will take a few minutes and changes will then be reflected on the [ammaTek website](https://www.ammatek.com)

You can see the workflow running on the [Actions](https://github.com/ArvinFlores/arvinflores.github.io/actions) tab of the repo

## Scripts

| Script      | Description |
| ----------- | ----------- |
| start | starts the dev server on `http://localhost:7777` |
| build | creates production assets and places them in the `public/` directory |
