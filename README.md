## example fashion app

Warning: the following link leads to adorableness. I find using fun/cute/adorable pictures as my placeholders increases my productivity (endorphins, etc).
[Heroku instance here](https://discover-fashion.herokuapp.com/)

####Overview

This app is a basic example of using Facebook's React with Django. While my initial goal was to meet a coding challenge given to me, I decided to build the challenge using these two because I did not know either of them, but wanted to learn them. They are both very fast and well designed. I also just love learning new things :)

####Security
This app has a few security issues. Don't use it for production. Debug should be off in settings, and the secret_key should be... well, secret. Make it an environment variable and load through that.

####Running
I run this on my computer with sqlite by using the python command ```python manage.py runserver```

If using sqlite, one can add information by going into the Django admin page through (localhost:8000/admin) after setting up an admin through the python shell.
