# ProFeedback
<img alt="App Logo" src="https://drive.google.com/uc?export=view&id=1jk30b4NWr0_7xd3UeJ4itf5h1JWVcc7b" width="200">

## Product Feedback Portal

ProFeedback is a product feedback portal where users can submit any suggestions, bugs occurring in their app, and also for IT personnel to utilize as a tool to overview any changes they have to make based on popularity of feedback and address it accordingly. 

# How I worked on this project

- This project is the frontend of a fullstack application: this is the repo for the [backend](https://github.com/jose-a-dlc05/product-feedback-app-BE)
- For this portion I am using React and Redux to connect to the backend. 
- Redux isn't necessarily needed here as the project is not complex and does not have different moving parts that need a central state management system.
- Just to note is currently not responsive, but will be the next feature I work on this project 

# How to navigate this project
Assuming you are well versed in React and Redux, if you want to take a look at the code overall, the best place to start is the App component, as you can see I have imported the pages I have coming from the page folder along with the BrowserRouter and the Switch and Route components as well.

<img alt="Product Feedback App Structure" src="https://drive.google.com/uc?export=view&id=17w5OmSFqXe-yJdHaUXXFRL-HLDpuKS1f" width="400">

<img alt="Product Feeback App Component" src="https://drive.google.com/uc?export=view&id=19e1zjdtU7Nim2XOHetRaYZ2Bm-_C7G6F" width="400">

# If I had more time I would change this
Add more functionality beyond the main CRUD functionality:
- In the Main Page:
  - Ability to upvote a feedback
  - Tile that gives ability for users to filter by category
  - A "sort by" dropdown button based on:
    - Most upvotes
    - Least upvotes
    - Most comments
    - Least comments
  - Tile providing overview of the status of cards represented by the number of cards per status
  - Link to view an overall roadmap page
- Add Roadmap page
- Inside the FeedbackDetail Page:
  - The ability to post a comment and reply to a comment 
  - Have the ability box have a character counter 
  - Nest comments
- Make the page responsive 

# Available scripts
