Roll-a-dex  NPC Generator

Page details 
- Site name/home page link from create a NPC page
- Create  Npc button to move to new page
- Button to generate random NPC on home page
- // Or could have home page have the random generate NPC button, and create NPC fields and on submit for either takes you to second page which is character sheet //
- Designed character sheet

API information-Or use DMG NPC section (Pg 89) to set a random pull chart for different (has charts to roll for random selections)
Including:
- Name
- Race
- Sex
- Occupation and history
- Appearance
- Talent
- Mannerism
- Interactions with other
- Useful Knowledge/Secret
- Bond/Flaw/Ideals


Random Number Generator in APP info
- Stats (Str, Dex, Int… )
- Based on stat assigned give a specific Modifier
- Apply stats to passive senses

What would be needed for the NPC Generator

Character Stats for random generated character
- Random number generator to loop through and assign Stats, or use array of Standard stats and assign them randomly [15,14,13,12,10,8]
- Append stats to page
- Modifier calculator to append to stats page
- Assign passive traits
- Reach Api for information:
- Name, race, size, speed, ac, languages, job/class, hp, ac 

Create a NPC page
- Name, Race, job/class field
- Submit Button that triggers stats and page call back to main to fill page
- Other stats can be generated based on random number/pull from api or set to object array for deeper api control

Behind the scenes thoughts Home Page
- Random number generator for Stats
- Function to lay stats to stats section
- Modifier Function to take Stats and place correct modifier 
- Functions to Put Called API info to correct sections

Behind Scenes for Create a NPC page
- Append submitted info to home page in correct positions
- Pull randomly generated data Stats, and other api info

 Post MVP thoughts
- Add Role play characteristic suggestions (accent, random description, blurb about character past)
- Check api for any submitted info so it doesn’t have multiples of names, classes, jobs, races
- Save created or generated NPCs to local storage so people can keep them
- Default images based on sex, class/job, race (to add more styling to page)
- Add simple or Detailed NPC generator to limit info needed


-change api call object handling to object. entries to keep key value pairs together till render
-