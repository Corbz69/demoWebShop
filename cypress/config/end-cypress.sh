#!/bin/bash
ROOT="$(git rev-parse --show-toplevel)"

userData='cypress/fixtures/userData.json'

if test -f $userData; then
   rm $userData
   echo "$userData has been removed"
else
    echo "$userData couldnt be found"
    fi