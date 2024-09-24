# Word Practcie With Little Ones
_Word Practice With Little Ones_ is a full-stack web app, for parents to help their children practice words that are generally difficult to pronounce for people with speech disorders. It is hard to tell if toddlers have any communication or speech disorders and even harder so to narrow down what type of disorder. This app provides a variety of words that are commonly difficult to pronounce with a disorder for the parents to practice with their toddler if they aren’t sure that their child has any struggles with speech/communication, but want to practice just in case. 
<br>
An SQL database holds a basic list of words for difficult to say for a variety of disorders. The user first clicks a button titled, "Get Word," which calls a function that retrieves a random word from the SQL, and the word will be displayed on the page. The word can be read out loud by the parent user and rehearsed by the child. will appear for you to practice together. The word comes from a sequelize database. If the child is able to say the word clearly and easily and does not need more practice, the user parent can click the button titled, "Correct!" button. This will remove the word from the database and it won’t appear again during that
practice round. It is removed from the database until the app is rerun and the database is reset. Immediately the next word will pop up. If they struggled with a word, and you want to come back to it later in the practice round, click this button and the word will remain in the list to be shuffled in again to come up later. And the next word will pop up.

Now maybe you want want to add some of your own words click this bar here, put in a word, and it will be added to the list to be shuffled out. Say I try putting in a past entered word or word that’s in the database, word already added, so it won’t let you add twice, so let’s do a different word
