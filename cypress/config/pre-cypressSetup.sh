#!/bin/bash
ROOT="$(git rev-parse --show-toplevel)"
randomNumber=$((RANDOM % 9991 + 10))
mailDomain=@demo.io

if test -f "$ROOT/cypress/fixtures/userData.json"; then
    echo "userData.json exists."
    else
        firstName="Corbin"
        lastName="Holdsworth"
        email=$firstName+$randomNumber+$mailDomain
        password="Password1234!"
        gender="male"
        country="United Kingdom"
        city="London"
        address1="London Street"
        postal="IM6 1EE"
        phoneNumber="+447624244662"
    printf '{
        "data": {
        "firstName": "%s",
        "lastName": "%s",
        "email": "%s",
        "password": "%s",
        "gender": "%s",
        "country": "%s",
        "city": "%s",
        "address1": "%s",
        "postal": "%s",
        "phoneNumber": "%s"
        }
} 
        \n' "$firstName" "$lastName" "$email" "$password" "$gender" "$country" "$city" "$address1" "$postal" "$phoneNumber"  > $ROOT/cypress/fixtures/userData.json
        fi

