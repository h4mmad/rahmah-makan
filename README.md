# Rahmah Makan

Based on one of United Nation's sustainable goals of eradicating hunger, Rahmah Makan is a web app that enables donors to 
donate food to community fridges spread across Penang. Donors are able to check the capacity of fridges through an IoT camera module which detects objects in the fridges. Donors are then able to navigate to the fridges and place the food items.


## Tech stack

Frontend is built using React JS and Tailwind CSS, Firebase database is used to store donation details and issues. A Flask server is used to run the object detection module written in Python. Google Maps API is used to display fridges on a map.

<img src="https://raw.githubusercontent.com/h4mmad/rahmah-makan/main/src/images/Group%201.png" width="600">


## System overview

A user is able to check capacity of community fridges near them, to donate, they login using Firebase auth, and select a fridge. On fridge selection, a request is made to the flask server through an API which specifies the fridge number, the backend runs the object detection module, detects the number of items in the fridge and returns a response, as low, medium or high capacity usage. The user can they navigate to the fridge to donate using Google Maps which is integrated with the application.

## User Interface

![image](https://user-images.githubusercontent.com/55020862/218257114-9702098b-6fb4-4841-a05b-5c7ba73e936a.png)
![image](https://user-images.githubusercontent.com/55020862/218256991-1935063e-dfee-400c-871d-1d3ac404cdaf.png)
![image](https://user-images.githubusercontent.com/55020862/218257031-0b6a88b7-6cc7-42a9-bfb6-0546dbeb6851.png)
![image](https://user-images.githubusercontent.com/55020862/218257381-f7c478b0-d0f3-46af-aeb7-92d5bf323ee1.png)

## Mobile User Interface

![image](https://user-images.githubusercontent.com/55020862/218257592-4657e9b7-46dc-4160-8230-2e667df95069.png)
![image](https://user-images.githubusercontent.com/55020862/218257541-d8b40e09-d529-42ee-aadc-f631607de742.png)


