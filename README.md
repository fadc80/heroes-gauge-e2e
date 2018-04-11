# Tour of Heroes Gauge E2E Tests

This project ilustrates how to create E2E tests for [Angular][2] applications using [Gauge][1]. As most Angular developers are familiar with the [Tour of Heroes][3], it was chosen to be the application under test.

In this repository you're going to find two folders:

* heroes - Tour of Heroes application
* gauge - Gauge test project 

Start running the E2E tests provided by the Gauge test project using the following instructions, then visit our [wiki][4] to learn how it works.

### Requirements

Verify if you already have installed: 

* [Node.js][5]
* [Chrome][6] 
* [Firefox][7]
* [Gauge][8]

### Install Gauge Plugins  

```bash
gauge install js -v 2.0.2
gauge install html-reporter
```

### Checkout

```bash
cd <your-install-folder>
git clone https://github.com/fadc80/heroes-gauge-e2e.git
cd ./heroes-gauge-e2e
```

### Run the Tour of Heroes Application

```bash
cd ./heroes
npm install
npm start
```
Keep it running.

### Run the Gauge Test Project

On a new terminal window...

```bash
cd ./gauge
npm install
npm run webdriver:update
npm run gauge:all
```

The output is going to look like this...

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

### Check Generated Reports

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
