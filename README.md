## Rahmah Makan

Based on one of United Nation's sustainable goals of eradicating hunger, Rahmah Makan is a web app that enables donors to 
donate food to community fridges spread across Penang. Donors are able to check the capacity of fridges through an IoT camera module which detects objects in the fridges. Donors are then able to navigate to the fridges and place the food items.

## Tech stack

Frontend is built using React JS and Tailwind CSS, Firebase database is used to store donation details and issues. A Flask server is used to run the object detection module written in Python.

## System overview

A user is able to check capacity of community fridges near them, to donate, they login using Firebase auth, and select a fridge. On fridge selection, a request is made to the flask server through an API which specifies the fridge number, the backend runs the object detection module, detects the number of items in the fridge and returns a response, as low, medium or high capacity usage. The user can they navigate to the fridge to donate using Google Maps which is integrated with the application.
