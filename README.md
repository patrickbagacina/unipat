# University App

A react web application that gives its users the capability to:
* List all universities around the world.
* View newsletters from different universities.
* Save their favorite universities.

### Minimum requirements to run the app
* [Node >= 8.10 and npm >= 5.6](https://nodejs.org/en/)


### Running the app on local
1. Go to the project folder via Terminal and install all dependencies
```bash
cd unipat/
npm install
```
2. Once finished, run the app bu executing:
```bash
npm run start
```

### Running ESLint
* Go to project folder via Terminal and execute eslint command.
```bash
cd unipat/
npm run lint
```

### Running unit tests
* To run tests with coverage, go to project folder via Terminal and execute the unit test command.
```bash
cd unipat/
npm run coverage
```
* To run tests without coverage, execute the following command:
```bash
npm run test
```
___
## How to use the app
### View all universities
* Go to the Universities page by selecting Universities on the app's drawer
* Input country or name of the university then select `Filter`
* Note: Clicking `Filter` without adding country or name will return all universities around the world.

### Add to favorites
* Note: You need to sign in to the app before you can save favorites
* Go to the Universities page and search for some universities.
* Select the `Heart` icon to add the university to your favorites.

### View all favorites
* Go to the Favorites page by selecting `Favorites` on the app's drawer.
* Note: You need to sign in to the app before you can view all your favorites.

### View all newsletters
* Go to the Newsletters page by selecting `Newsletters` on the app's drawer.