## Team Liskov Project
My Jukebox! Interactive site that allows you to listen to music, see lyrics, and watch videos. 

## Github Branching Directions
Collaborator Directions 

1.	Follow the email link sent from the maestro in order to become a collaborator. 
2.	Star the Repo. This way you can follow the changes. 

![image 1](/assets/images/Picture1.png)

3.	In your profile, you will be able to see the Repos you have Starred. 
![image 1](/assets/images/Picture2.png)

4.	Clone the Repo.  Copy the link, open your Bash Terminal, find the folder you want to clone the repo to, and use the git clone “paste the link”
![image 1](/assets/images/Picture3.png)

Note: We will be creating local and remote branches from the Master.  This will not make new files or folders for you.  Rather, when you “checkout” that branch, once you “check in” and push those changes, we will see it on the Github site, once we create a remote version of it as well.  

5.	You will see the branches that have been created remotely within the GitHub website.  In order to create a new branch locally and remotely, following the next steps. 
6.	Open your Bash Terminal,  and go to the repo folder you have cloned.  
![image 1](/assets/images/Picture4.png)

7.	Type git branch 
This command will list all of the current branches remotely and locally for you to access.  The one highlighted in green is the one that you have currently “checked out” 
![image 1](/assets/images/Picture5.png)

8.	Type git checkout -b “name of your new branch” 
This command will create a new branch, and check it out locally for you to work on.  Remember, this will not create a new folder or file.  It will just allow you to have a branch of the master, work on it, and add/commit/push to the repo.  First we have to create a remote version of it though, because right now, it’s only on your local computer, not on the Github site. The pictures below demonstrate that. 
![image 1](/assets/images/Picture6.png)
![image 1](/assets/images/Picture7.png)

9.	FIRST Make sure you are on the branch you want to make remote! You can always check by typing git branch.  It will list all of the branches, and the one in green, is the one you have checked out.  NEXT type git push -u origin “name of your branch”

Refresh your browser.  You should see your branch now on the remote site! YAY! 
![image 1](/assets/images/Picture8.png)
![image 1](/assets/images/Picture9.png)

10.	 BEFORE YOU MAKE ANY FILE CHANGES, ALWAYS GIT PULL THE MASTER FIRST!!!!!
If you want to make changes to your file, FIRST make sure you are on the branch you want to make file changes to.  Typing git branch is the best way to see what branch is checked out.  Remember, it’s the one in green.  

Note: To switch between branches type git checkout “name of file”
![image 1](/assets/images/Picture10.png)

11.	Make some changes to the html, css, or js file.  
![image 1](/assets/images/Picture11.png)

12.	In your terminal, again make sure you are on the correct branch file, and do the normal: 
git add “file name” .. example git add index.html
git commit  -m”comments to the file”
git push (it’s just git push… not the origin master one we have been doing, since this is a branch)
![image 1](/assets/images/Picture12.png)

13.	Refresh your Github page.  Switch to the branch and then the file that you have pushed changes to. Watch the magic!! 
![image 1](/assets/images/Picture13.png)

Maestro Directions
1.	Create Repository 
2.	Add Collaborators  
![image 1](/assets/images/Picture14.png)
a.	Settings 
b.	Collaborators 
c.	Enter name of Collaborators


3.	Have the Collaborators star the Repo. This way they can follow the Repo. 
![image 1](/assets/images/Picture15.png)


4.	Everyone will be pushing their branch changes.  Once we are ready to merge those changes, make sure you are on the Master branch. 
![image 1](/assets/images/Picture16.png)

5.	Type git merge “name of branch file” 
6.	Git push 
This will merge to the master
![image 1](/assets/images/Picture17.png)

