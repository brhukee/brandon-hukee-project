#!/bin/bash

API="https://tic-tac-toe-api-development.herokuapp.com"
URL_PATH="/sign-in"

curl "${API}${URL_PATH}" \
--include \
--request POST \
  --header "Content-type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password":  "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
    }
  }'

echo
