# React Tap Room App Development Notes

## Epicodus React Level 1 Independent Project 

#### Project September 07, 2018

#### By Protatodev (Thad Donaghue)

## Description

I have found that the use of props is so much easier than using directives to pass data to and from your components. I like the structure of react much better than angular. Angular seems very clunky and verbose. React has alot of the fundamental development features on demand without excess import statements and third party plugins. 

1. It was difficult to set up the state management for the pints available property on the keg component. The keg component must modify this state on a button click and it was tricky to implement.
2. Introducing styling to change the price color was difficult due my misunderstanding of how CSS objects work as opposed to stylesheets.
3. Introducing styling for the pints left font after they hit 10 or below was pretty difficult for the same reason as above.
4. I like being able to pass functions down as props to child components so that they can modify the state of the parent component. 
5. It was very difficult to figure out how to effectively incorporate bootstrap styling. In the end, I added the CDN to the template.ejs file.