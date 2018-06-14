# In your homework directory, create a new directory called star_wars
mkdir star_wars

# In the star_wars folder, create two new directories: empire and rebellion
mkdir star_wars/empire
mkdir star_wars/rebellion

# Inside the empire directory, create a .txt file called darth_vader
touch star_wars/empire/darth_vader.txt

# Use the force (or your knowledge of the command line) to add the text "...heavy breathing..." to the darth_vader file.
echo "...heavy breathing..." > star_wars/empire/darth_vader.txt

# Inside the `empire` directory, create a .txt file called `emperor_palpatine.txt`.
    touch star_wars/empire/emperor_palpatine.txt

# Inside the empire directory, create a directory called death_star.
mkdir star_wars/empire/death_star

# Move darth_vader into the death_star.
      mv star_wars/empire/darth_vader.txt star_wars/empire/death_star/

