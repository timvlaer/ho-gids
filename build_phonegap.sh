#!/bin/bash

grunt build:phonegap
git add --all www
git commit -m"New Phonegap build"
git push origin master
