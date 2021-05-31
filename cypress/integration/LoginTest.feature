Feature: Login Test
  As a product owner of the saucedemo app
  I want to ensure that only valid users access the app
  So that customer accounts are secure

  Scenario: No access to Inventory page for unauthorised users
    Given I am viewing the saucedemo app
    When I navigate to "/inventory.html"
    Then I am redirected to "/"
    And I should see the following error message:
    """
    Epic sadface: You can only access '/inventory.html' when you are logged in.
    """

  Scenario: No access to Cart page for unauthorised users
    Given I am viewing the saucedemo app
    When I navigate to "/cart.html"
    Then I am redirected to "/"
    And I should see the following error message:
    """
    Epic sadface: You can only access '/cart.html' when you are logged in.
    """

  Scenario Outline: Login successfully with valid account
    Given I am viewing the saucedemo app
    When I login as "<user>" the page loads within 5 seconds
    Then I should not see any error message
    And the uri is "/inventory.html"
    Examples:
    | user                    |
    | standard_user           |
    | performance_glitch_user |

  Scenario: Login prevented when account is locked
    Given I am viewing the saucedemo app
    When I login as "locked_out_user" with correct password
    Then I should see the following error message:
    """
    Epic sadface: Sorry, this user has been locked out.
    """
    And the uri is "/"

  Scenario: Login prevented with invalid user account
    Given I am viewing the saucedemo app
    When I login as "invalid_user"
    Then I should see the following error message:
    """
    Epic sadface: Username and password do not match any user in this service
    """
    And the uri is "/"


  Scenario: Login prevented with no username provided
    Given I am viewing the saucedemo app
    When I login with no username and password as "sdasd"
    Then I should see the following error message:
    """
    Epic sadface: Username is required
    """
    And the uri is "/"


  Scenario: Login prevented with no password provided
    Given I am viewing the saucedemo app
    When I login with no password and username as "standard_user"
    Then I should see the following error message:
    """
    Epic sadface: Password is required
    """
    And the uri is "/"



