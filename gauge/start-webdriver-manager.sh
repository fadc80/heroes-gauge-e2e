
#!/bin/sh

echo 'Pronto para inicializar webdriver-manager';

# Start selenium server and trash the verbose error messages from webdriver
./node_modules/.bin/webdriver-manager start 2>/dev/null &

# Wait 3 seconds for port 4444 to be listening connections
while ! nc -z 127.0.0.1 4444; do sleep 3; done

echo 'Webdriver Manager inicializado';
