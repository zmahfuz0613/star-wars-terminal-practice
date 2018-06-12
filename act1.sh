#!/usr/bin/env bash

# In your homework directory, create a new directory called star_wars
mkdir star_wars

# In the star_wars folder, create two new directories: empire and rebellion
mkdir -p star_wars/{empire,rebellion}

# Inside the empire directory, create a .txt file called darth_vader
touch star_wars/empire/darth_vader.txt

# Use the force (or your knowledge of the command line) to add the text "...heavy breathing..." to the darth_vader file.
echo "...heavy breathing..." > star_wars/empire/darth_vader.txt
