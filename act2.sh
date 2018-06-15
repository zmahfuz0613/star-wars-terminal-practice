# 1. Inside the `star_wars/rebellion` directory, [IN ONE COMMAND!!] create a file called `princess_leia` with the text `Help me, Obi-Wan…You’re my only hope.`
echo "Help me, Obi-Wan…You’re my only hope." > star_wars/rebellion/princess_leia

# 2. Create a file called obi_wan in star_wars/rebellion.
touch star_wars/rebellion/obi_wan

# 3. Create a *file* in star_wars/rebellion called luke_skywalker.
touch star_wars/rebellion/luke_skywalker

# 4. Create a *directory* in star_wars/rebellion called millenium_falcon.
mkdir star_wars/rebellion/millenium_falcon

# 5. In two commands, inside the millenium_falcon, create two files: han_solo and chewy.
touch star_wars/rebellion/millenium_falcon/han_solo
touch star_wars/rebellion/millenium_falcon/chewy

# 6. In THREE commands, move luke_skywalker, obi_wan, and princess_leia into the millenium_falcon, respectively.
mv star_wars/rebellion/luke_skywalker star_wars/rebellion/millenium_falcon/
mv star_wars/rebellion/obi_wan star_wars/rebellion/millenium_falcon/
mv star_wars/rebellion/princess_leia star_wars/rebellion/millenium_falcon/

# 7. Move the millenium_falcon into the death_star.
mv star_wars/rebellion/millenium_falcon star_wars/empire/death_star/
