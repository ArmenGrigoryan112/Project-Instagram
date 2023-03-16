Instagram Project


This project is a replica of Instagram that uses the JsonPlaceholder website to access the users, posts, pictures and information that would otherwise be accessed from a real server.

Features
-JsonPlaceholder: All the users, posts, pictures and information that otherwise would be accessed from a real server was requested from the jsonplaceholder website, to imitate a real server.

-Messenger: This code includes fully functioning messenger, where you can write messages to the users from the above mentioned server. Not only are you able to write messages to any of the given accounts, but also the messages are saved for the both accounts, so if you log out of the current account and log in into the one to whom the message was intended to, you will find that the conversation stated the same for both.

-Log in: You have the option to log in as 10 pre-registered users from https://jsonplaceholder.typicode.com/users , where the username is the account username and the password is the city of the given user, for example Bret Gwenborough respectively.

-Commenting: Under each post you may add a comment, which will be under the name of the account you are currently logged in.
-Creating posts: You may add posts by using a link of an image and a description. The post will be added both in the profile and the main page.

-Profile page: The profile page not only has the username you are currently logged in, but also all the posts, like, comment and followers count which are all made up of randomized numbers. The posts count calculate the exact number of posts in the profile page. Each post can be deleted with by clicking on the red cross on top of the post in the profile page.

-Search bar: The search bar is made to find users by writing key-words and letters.

-Log out: By clicking on the "switch" key on the main page the account you are currently using will be logged out and you can enter as a different user.

These are only the features seen by the users, thus the code behind all of this would be much more interesting to view))

KNOWN BUGS

As of March 17th, 2023, the following bugs are present in the project:

1. Messenger's UI has a problem with input being dragged down as the messages become more in the chat.
2. The project is not optimized with such important hooks as memo and useCallBack, which makes the website unnecessarily re-render.
3. Log in page needs some cosmetic fixes to look more like the real Instagram log in page.
4. A HOC should be written for the comments section, so that the user would be able to see more/less of the comments on the given post.
