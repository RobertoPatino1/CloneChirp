#!/bin/bash

source env/bin/activate

pip install -r requirements.txt

python manage.py runserver &

wait
