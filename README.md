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
- They are a good basis to identify if functionality is not working properly
- They are what I concider to be the MVP functionality of the journey's.
- (Assumption) The use cases I have chosen would cover the most used features of the App!

# What would I do differnetly
- Would increase the amount of scope the test cases are covering. There is potential to create many more assertions along the journey's.
- On the payments journey, to eliminate more risk with the tests, I would love to make sure the price of the product is correct. If there were an API to call, I would love to get the product information via the API and then create the assertions on the Frontend!
- Would love to habe finished and made the CI | CD pipeline work. Good basis to start though.
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
