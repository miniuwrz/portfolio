#!/bin/bash

# Sprawdzanie, czy podano komunikat dla commitu
if [ -z "$1" ]; then
  echo "Użycie: ./git_commit_push.sh 'Twój komunikat commitu'"
  exit 1
fi

# Automatyczne dodanie, commit i push
git add .
git commit -m "$1"
git push

# Informacja o zakończeniu
echo "Zmiany zostały wysłane."
