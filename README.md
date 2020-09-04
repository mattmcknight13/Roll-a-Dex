
# Project Overview
Allow user to quickly build a NPC docket(character sheet), either by generating a random one, or by inputting specfic information, which will then be appended to the API to help increase options for later randomly generated characters

## Project Name

Roll-a-Dex NPC Generator

## Project Description

Want to create a growing list of Non Player Characters that users can use to quickly get a npc or create a specific outliine for and append that outline to the api database so others can have a chance to get it as well.

## API and Data Sample

Airtable Roll-a-Dex Tables 
https://airtable.com/tblOof022T6PTf3Hk/viwFVsMWEzpyfku8U?blocks=hide
```json

 {
    "records": [
        {
            "id": "recuJjyyDWiRqH8Cs",
            "fields": {
                "Name": "Morticia Lindel",
                "race": "Human",
                "job": "Tavern Owner",
                "descriptors": "long black hair, pale skin, serious demeanor\n"
            },
            "createdTime": "2020-09-03T21:08:08.000Z"
        },
        {
            "id": "rec85czgEbtQdAgPS",
            "fields": {
                "race": "Elf",
                "Name": "Daethana",
                "job": "Woodcarver",
                "descriptors": "short cut red hair, jovial\n"
            },
            "createdTime": "2020-09-03T21:08:08.000Z"
        },
        {
            "id": "recvVN2ik5VOi3WbD",
            "fields": {
                "race": "Halfling",
                "Name": "Korver",
                "job": "Guildmaster",
                "descriptors": "boisterous, and cunning "
            },
            "createdTime": "2020-09-03T21:08:08.000Z"
        }
    ],
    "offset": "recvVN2ik5VOi3WbD"
}
```


## Wireframes

 Desktop/Tablet

![wireframe](https://imgur.com/OQx0XYQ.png)

Mobile view

![wireframe](https://imgur.com/eaEaCfh.png)

* Sex was added will be appended to WireFrame 

Description:
- Blue elements are headers
- Red elements are buttons
- field entry for appending and creating new npc
- orange elements are decorative (might remove)
- Boxes are for primary stats
- cirlces for modifiers based off primary stats
- senses box is pssive stats
- and display fields



### Component Heirarchy 
Home page/NPC create/get page

Components

- Roll-a-Dex 
  - Home page 
     - Generate Random NPC button
     - Curated Input Npc Form
         - Name input field
         - Race input field
         - Sex input field
         - Description input field
         - Plot Hook input field
    - Generate Curated Npc Button

  - Character Sheet Page
     - Stats
        - modifiers
     - Senses
     - Name
     - Sex
     - Race
     - Occupation
     - Description
     - Plot Hook





### API

table will be NPC and has a series of prebuilt characters currently which with attributes such ass.

- race
- sex 
- name
- job
- descriptor
- plot hook
 


#### MVP 

- Create a Button that randomly generates a NPC character from API database of prebuilt and user built characters only stats will be generated randomly each time

- Create a form to Manually create a  NPC character do display and append to api

- have Game Stats (Dex,Con,Int) randomly generated and/ or randomly applied using Standard array of Stats [15,14,13,12,10,8] have proper Modifiers applied

- Once a Character is made through either means, generate data on a stylised character sheet on page


#### PostMVP  

- Loading screen

- Add functionality that makes sure anything in created traits are not already in list on database to avoide doubleling up.

- Increase number of traits that can be chosen from


- Default images based on some qualifier (race,sex,job)

- Add quick or long form for auto generate 

- Add rp suggestions (accent, mannerisme, personality buzz words)

- Add local storage or pdf print options to keep character 


## SWOT

Strengths 
- able to remain calm in stressful situations
- adapt previous work to fit new ideas
- js 

Weakness 
- Css
- Ux design


Oppurtunities - Working with api
- reach out ot a UX student
- reasearch website design...i know there are some recommended reading on the matter

Threats
- Api call limits
- finding right break point for multiple entries of same info (ex. 500 Scanlan Shorthalt gnome bards)


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|September 4| Project Approval | Incomplete
|September 5| psuedo code design begin code structure | Incomplete
|September 6| reach api, render api| Incomplete
|September 7| append to api | Incomplete
|September 8| begin break up into components, css| Incomplete
|September 9|  css, Initial Clickable Model, MVP, Post MVP  | Incomplete
|September 10|  PostMVP | Incomplete
|September 11| Presentations | Incomplete

## Priority Matrix


## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes. 
