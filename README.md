## Rahmah Makan

Based on one of United Nation's sustainable goals of eradicating hunger, Rahmah Makan is a web app that enables donors to 
donate food to community fridges spread across Penang. Donors are able to check the capacity of fridges through an IoT camera module which detects objects in the fridges. Donors are then able to navigate to the fridges and place the food items.

## Tech stack

Frontend is built using React JS and Tailwind CSS, Firebase database is used to store donation details and issues. A Flask server is used to run the object detection module written in Python.

<img src="https://www.gstatic.com/devrel-devsite/prod/vde5e97689c1d94fa683b9e5392f0f6b6562f68c8b527194cc7ca91d97bde649f/firebase/images/lockup.svg"  width="200" height="auto">


## System overview

A user is able to check capacity of community fridges near them, to donate, they login using Firebase auth, and select a fridge. On fridge selection, a request is made to the flask server through an API which specifies the fridge number, the backend runs the object detection module, detects the number of items in the fridge and returns a response, as low, medium or high capacity usage. The user can they navigate to the fridge to donate using Google Maps which is integrated with the application.
