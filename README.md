# demoWebShop

# Main areas to automate (High risk)

### Registration and Login / authentication process
- The login and authentication process is a high-risk area as it controls access to the system. 
- Any vulnerability in this area could result in unauthorized access to the system, leading to a potential data breach
### Checkout and payment process
- Payment processing is a high-risk area as it involves the transfer of sensitive information such as credit card details, and any breach in this area could result in significant financial losses and damage to the company's reputation.
### Product search and filtering functionality
- This area is essential as it affects the user experience, and any issues such as incorrect search results or non-functional links could lead to frustration and abandonment of the website.
### Cart functionality and validation
- The shopping cart and checkout process are high-risk areas as they are integral parts of the e-commerce flow. 
- Any technical issues such as errors or glitches could lead to the loss of potential customers, decreased revenue, and damage to the company's reputation.

# Why Ive chosen the test cases
- They eliminate / mitigate the risk of the above. 
- They are a good basis to identify if crucial functionality is not working properly
- They are what I concider to be the MVP functionality of the journey's.
- (Assumption) The use cases I have chosen would cover the most used features of the App!

# What would I do differnetly
- Would increase the amount of scope the test cases are covering. There is potential to create many more assertions along the journey's.
- On the payments journey, to eliminate more risk with the tests, I would love to make sure the price of the product is correct. If there were an API to call, I would love to get the product information via the API and then create the assertions on the Frontend!
- Would love to have finished and making the CI | CD pipeline work. Good basis to start though.
- Performance increases. These tests would be added onto a CI | CD pipeline, would love to make sure the tests are as fast as possible, ensure there are no cy.wait() commands for example.


# Commands to run the project
### For windows:
- In the root of the project run ```npm install```
- Head to the folder cypress/config and run the command ```attrib -r pre-cypressSetup.sh```
- Same folder as above ```attrib -r end-cypress.sh```
- Then run the command ```npx cypress run```

### For Linux:
- In the root of the project run ```yarn install```
- Head to the folder cypress/config and run the command ```chmod +x pre-cypressSetup.sh```
- Same folder as above ```chmod +x end-cypress.sh```
- Then run the command ```npx cypress run```

![image](https://user-images.githubusercontent.com/25659775/228176589-0313f8e4-07e7-47ea-973a-8f06fb24e55b.png)

## Register a User:

https://user-images.githubusercontent.com/25659775/228176944-8b9a67f2-550c-4136-a085-6004cdacefeb.mp4


## Login User:

https://user-images.githubusercontent.com/25659775/228176911-56ee131b-fa61-4bb0-bf22-385c8cb8246c.mp4


## Checkout functionality:
https://user-images.githubusercontent.com/25659775/228176817-5f19fc54-42ce-49b2-8f77-8f4b9a9eb28f.mp4

