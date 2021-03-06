# DAILY WORK SCHEDULER

## DESCRIPTION

This webpage was designed to be a daily work scheduler. 

There is a clock on the page showing the current time, and the schedule is colored based on which hours have passed, and what is to come.

When you type something into a time box and click save, the text is saved into the local storage. When you reload the page, your saved text will be shown. When you click clear a box, the text in that box along with the stored data will be cleared, and when you click "Clear Schedule" at the top, all of the local data is cleared.

## WHAT WAS DONE?

The time blocks and buttons are added in the html document, and most of the rest of the work is done in the Javascript document.

A clock is displayed with a time interval showing the exact time at the top of the document. 

The current time is noted, and used to determined whether each time block hour has occurred in the past, is yet to occur in the future, or is the current hour. The boxes are formatted accordingly by assigning a respective class to each one. 

Users can type in tasks for the day and click save, which saves that text into local storage. The saved text will appear when the document is reloaded. This is achieved by using a for loop to check if there is any saved information for each time block when the document has loaded.

Users can delete an entry by clicking the clear button next to the timed task, or clear the entire schedule by clicking the "Clear Schedule" button at the top of the page.

## DEPLOYED!

This project was successfully deployed, Need proof? Click the links below to give it a try.

[Daily Planner](https://cmoss703.github.io/daily-planner/)

[Github Repo](https://github.com/cmoss703/daily-planner)

## PROOF

See some images of the page in action below:

![3pm time](images/3pm.png)

![saving in storage](images/storage.png)

![7pm time](images/7pm.png)