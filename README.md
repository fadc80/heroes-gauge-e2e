# Tour of Heroes Gauge E2E Tests

This project ilustrates how to create E2E tests for [Angular][2] applications using [Gauge][1]. As most developers are familiar with the [Tour of Heroes][3] example, it was chosen to be the application under test.

In this repository you're going to find two folders:

* heroes - Tour of Heroes
* gauge - Gauge Project 

Start running the E2E tests provided by the Gauge Project (see instructions below), then visit our [wiki][4] to learn how it works.

### Requirements

* [Node.js][5]
* [Chrome][6] 
* [Firefox][7]

### Install Gauge

Check [Gauge Get Started][8] for installation steps. 

Additionally, install `js` (javascript) and `html-reporter` plugins:

```bash
gauge install js -v 2.0.2
gauge install html-reporter
```

### Checkout repository

```bash
cd <INSTALL-FOLDER>
git clone https://github.com/fadc80/heroes-gauge-e2e.git
```

### Run Tour of Heroes

```bash
cd <INSTALL-FOLDER>/heroes
npm install
npm start
```
Keep it running...

### Run Gauge Project

```bash
cd <INSTALL-FOLDER>/gauge
npm install
npm run webdriver:update
npm run gauge:all
```

The output should look like this:

```bash
# Dashboard Heroes Search
  ## Scenario 1: Search Matching no Heroes       ✔ ✔ ✔ ✔
  ## Scenario 2: Search Matching one Hero        ✔ ✔ ✔ ✔
  ## Scenario 3: Search Matching Multiple Heroes        ✔ ✔ ✔ ✔ ✔ ✔ ✔

# List of Heroes
  ## Scenario 1: Add a new hero  ✔ ✔ ✔ ✔ ✔ ✔ ✔
  ## Scenario 2: Delete a hero   ✔ ✔ ✔ ✔ ✔ ✔ ✔ ✔

Specifications: 2 executed      2 passed        0 failed        0 skipped
Scenarios:      5 executed      5 passed        0 failed        0 skipped

Total time taken: 21.278s
```

Actually, this output is produced twice because tests are run through Chrome and Firefox.

### Read Generated Reports

Open the *index.html* generated on the following folders:  

*gauge/reports/chrome*  
*gauge/reports/firefox*

That's all!

[1]:https://gauge.org/index.html
[2]:https://angular.io/
[3]:https://angular.io/tutorial#tutorial-tour-of-heroes
[4]:https://github.com/fadc80/heroes-gauge-e2e/wiki
[5]:https://nodejs.org/
[6]:https://www.google.com/chrome
[7]:https://www.mozilla.org
[8]:https://gauge.org/get-started.html
