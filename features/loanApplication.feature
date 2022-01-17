@Smoke
Feature: SmartBiz Smoke Test

    Scenario: Loan Application
        Given I navigate to the Smartbiz Loans site
        Then I will see the application page
        And I will see that the prequalify button is disabled
        When I select Build my business or refinance an existing debt
        And I select SBA loan
        And I fill up Step 3 with  Test User First Name, Test User Last Name, 1234567234, Test Business and an email that starts with test_automation
        And I select Online search for How did you hear about us
        And I check Accept Terms and conditions checkbox
        Then I will see that the prequalify button is enabled
        When I click Continue to pre-qualify button
        Then I should see Pre Loans Page is displayed
        And I should see that the url contains /apply/loan
        When I click on Let's get started button
        Then I should see Financing Needs Page is displayed
        Then I should see that the url contains apply/prequalify/financing_needs
        And I should see the I have a strict timeline: 2 weeks or less button
        And I should see the I’m flexible: about a month works for me button
        And I should see the I don’t have a specific time in mind button
        And I should see the Save & Continue button
        And I should see the button Save & Continue is disabled
        When I click on I’m flexible: about a month works for me button
        And I should see the button Save & Continue is enabled
        When I click on Save & Continue button
        Then I should see Inception Date Page is displayed
        And I should see that the url contains /apply/prequalify/business/inception_date
        And I should see the Less than 2 years ago button
        # And I should see the button 2-5 years ago
        # And I should see the button 6-10 years ago
        # And I should see the button More than 10 years ago
        # And I should see the button Save & Continue
        And I should see the button Save & Continue is disabled
        When I click on 6-10 years ago button
        Then I should see the button Save & Continue is enabled
        When I click on Save & Continue button
        Then I should see Industry Page is displayed
        And I should see that the url contains /apply/prequalify/business/industry
        # And I should see the button Save & Continue
        And I should see the Business Industry selection dropdown
        And I should see the button Save & Continue is disabled
        When I select Manufacturing option for Business Type
        Then I should see the button Save & Continue is enabled
        When I click on Save & Continue button
        Then I should see Address Page is displayed
        And I should see that the url contains /apply/prequalify/business/address
        And I should see the button Save & Continue is disabled
        When I enter address 378 East St, Bloomsburg, PA and select auto suggested option
        And I should see the button Save & Continue is enabled
        When I click on Save & Continue button
        And I should see Entity Type Page is displayed
        And I should see that the url contains /apply/prequalify/business/entity_type
        And I should see the button Save & Continue is disabled
        And I select Independent Contractor option for Entity Type
        When I click on Save & Continue button
        And I should see Employees Page is displayed
        And I should see that the url contains /apply/prequalify/business/employees
        # And I should see the “No Employees -- just me button
        # Verify “No Employees -- just me”, “1-5 employees”, “6-10 employees”, “11-20 employees”, “More than 20 employees” and “Save & Continue” buttons are present
        And I click on 6-10 employees button
        And I should see the button Save & Continue is enabled
        When I click on Save & Continue button
        Then I should see Annual Revenue Page is displayed
        And I should see that the url contains /apply/prequalify/business/annual_revenue
        When I click on Below $50,000 button
        And I click on Save & Continue button
        Then I should see the Password Page is displayed
        And I should see that the url contains /apply/prequalify/business/password
        And I should see the button Save & Continue is disabled
        When I enter the password Test123! in Password Page
        Then I should see the button Save & Continue is enabled
        When I click on Save & Continue button
        Then I should see the Owners Page is displayed
        And I should see that the url contains /apply/prequalify/owners
        And I should see the applicants First Name: Test User First Name is displayed
        When I click on the logout link
        When I click Yes, sign me out button
        When I enter generated email address that starts with test_automation
        And I enter the password Test123! in Login Page
        And I click on Log In button
        Then I should see the Owners Page is displayed
        












