- get user input(start stack, end stack)

- if you choose from an empty array, or one that does not exist, the arrays will not be updated and a message will be console logged out  saying "choose a valid stack"
- you can always move into an empty array

- when moving a number we need to note:
1.) if the space is blank(no number in that slot) it is ok to move
2.) if there is a number in that space the number you are moving must be LESS than the number already in place.

- can only move a number from the end of the array and placed on another array(legally)
1.) in other words you can't move a number that has another number on top of it
- define a legal move(moving numbers into an empty array or on to a number great than itself)

- we need to update the stacks object, using the user input that we get(start stack, end stack)

- in order to win the game:
1.) must move all pieces in order to column B or C
2.) a does not count as a win ever



3 tests:
1.) test that a is NOT able to win 
2.) test taht c can win
3.) test that you can't enter an invalid letter (only a, b an c)
