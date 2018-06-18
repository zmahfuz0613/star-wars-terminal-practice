![star wars theme image](https://i.ytimg.com/vi/SBW95uQM45U/hqdefault.jpg)

# Star Wars, the Command Line, and The Battle for the Fate of the Universe

Working in the command line is a key skill to develop as a programmer. It's a big break from what you're used to, and practice makes (eventually) perfect. Let's explore the Star Wars narrative using the command line!

## Instructions
* There are three files `act1.sh`, `act2.sh`, `act3.sh` for each of the acts below. 
* Follow the prompts either here or in the files themselves

### Get Started
* run `npm i` from this folder to install all the latest packages necessary to run this exercise
* open this directory in code:
    * `code .`

### Track Your Progress!
This exercise is self-tested, giving you direct feedback on whether you're on the right path.

run `npm t` to start the test
* to quit, <kbd>CTRL</kbd> + <kbd>c</kbd>
* As you work, make sure you `git add .` and `git commit -m "[YOUR MESSAGE HERE]"`!


## Act I
> Record your answers in `act1.sh` 
* Follow the instructions in the shell script in regards to the number of commands.

1. In THIS directory, create a new directory called `star_wars`.
    - Example answer: `mkdir star_wars`
1. In the `star_wars` folder, create two new directories: `empire` and `rebellion`. In that order!
    - Note: do not use `cd`! how do you create a sub-directory from here?
1. Inside the `empire` directory, create a *file* called `darth_vader`.
1. Use the force (or your `echo`) to add the text `...heavy breathing...` to the `darth_vader` file. (Don't remember how to do this? Use the 'other force', known as Google!)
1. Inside the `empire` directory, create a *file* called `emperor_palpatine`.
1. Inside the `empire` directory, create a directory called `death_star`.
1. Move `darth_vader` into the `death_star`.

## Act II
> Record your answers in `act2.sh`

1. Inside the `star_wars/rebellion` directory, [IN ONE COMMAND!!] create a file called `princess_leia` with the text `Help me, Obi-Wan...You’re my only hope.`
    - see https://www.howtoforge.com/community/threads/echo-into-a-file.115/ 
2. Create a *file* called `obi_wan` in `star_wars/rebellion`.
3. Create a *file* in `star_wars/rebellion` called `luke_skywalker`.
4. Create a *directory* in `star_wars/rebellion` called `millenium_falcon`.
5. Inside the `millenium_falcon`, create two files: `han_solo` and `chewy`.
6. In THREE commands, move `luke_skywalker`, `obi_wan`, and `princess_leia` into the `millenium_falcon`.
7. Move the `millenium_falcon` into the `death_star`.

## Act III
> Record your answers in `act3.sh`


1. Unload the Millenium Falcon in ONE COMMAND! Move the whole crew from the `millenium_falcon` directory into the `death_star` directory.
2. SPOILER! `darth_vader` has defeated `obi_wan`! Delete poor `obi_wan`.
3. Our heroes have disabled the tractor beam! Move the whole crew back into the `millenium_falcon`!
Remember: `darth_vader` remains in the `death_star` and `emperor_palpatine` is still in the `empire`.
4. Move the `millenium_falcon` back into the `rebellion` directory.
5. `darth_vader` leaves the `death_star` to pursue Luke! Move him from the `death_star` into the `empire` directory!
6. Thanks to his practice back home at Beggar’s Canyon, Luke blew up the `death_star`! Remove it from the galaxy!

## Fin

![star-wars-the-end](https://media.giphy.com/media/iQn33nEos213i/giphy.gif)
