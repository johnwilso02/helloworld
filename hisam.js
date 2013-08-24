#!/usr/bin/env node

app.get('/', function(request, response) {
  response.send('Good afternoon, Sam');
});
