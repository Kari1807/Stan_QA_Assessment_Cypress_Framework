Feature: Automation Examples
	In order to automate different examples
	As a user of the herokuapp website
	I want to be able to automate the different examples available on the website

Background: 
   Given I am on the herokuapp website

@Checkbox
Scenario: Validation of check and uncheck functionality on a checkbox
	When I click on "Checkboxes" link
	Then I should be able to check a checkbox
	And I should be able to uncheck a checkbox

@Dropdown
Scenario: Validation of dropdown functionality
	When I click on "Dropdown" link
	Then I should be able to select an "Option 1" from the dropdown

@AddRemoveButton
Scenario: Validation to add and remove elements
	When I click on "Add/Remove Elements" link
	Then I should be able to add "4" elements
	And I should be able to delete "2" elements

@ContextMenu
Scenario: Validation for context menu
	When I click on "Context Menu" link
	Then I should see a javascript alert after right-click in the box on the context menu page

@Authentication
Scenario: Validate successful login with form authentication
	When I click on "Form Authentication" link
	And I enter a valid username and password
	Then I should be able to login successfully
	And I should see the login page after successful logout

@ShadowDom
Scenario: Validate the shadow dom elements
	When I click on "Shadow DOM" link
	Then I should be able to validate the text in first text section
	And I should be able to validate the text in second text section
	And I should be able to validate the shadow elements

@FileUpload
Scenario: Validate file upload
	When I click on "File Upload" link
	And I select a file to upload - "Cypress_Logo"
	Then I should be able to upload the file

@Notification
Scenario: Validate notification messages
	When I click on "Notification Messages" link
	And I click on button to receive new notification
	Then I should be able to see valid notification as per user actions