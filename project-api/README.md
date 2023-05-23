# API Documentation

## Routes

### 

1. GET /get-users
Returns the complete list of users
Input: N/A
Ouput: Array of Users 

2. POST /add-user
Expects a JSON object containing the details of the user. Saves this into the project database.
Applications and adviser of user is initially empty.
Returns an object with a boolean field "success". The value of success is true if the subject was saved. Else, false.

Input: { "fname": String, "mname": String, "lname": String, "snumber": String, "usertype": String, "email": String, "password": String }
Output: { "success": Boolean }

3. POST /delete-user
Expects a JSON object containing the id of the user. Deletes 1 user that has the specified id if it exists. Returns an object with a boolean field "success". The value of success is true if a record was deleted. Else, false.

Input: { "_id": ObjectId}
Output: { "success": Boolean }

4. GET /get-applications
Returns the complete list of applications
Input: N/A
Ouput: Array of Applications 

5. POST /add-application
Expects a JSON object containing the details of the application. Saves this into the project database.
Remarks is initially empty.
Returns an object with a boolean field "success". The value of success is true if the subject was saved. Else, false.

Input: { "status": String, "step": Number, "studentsubmission": Object{"link": String, "date": Date, "stepgiven": Number} }
Output: { "success": Boolean }

(might be changed to close-application once we figure out what we're doing)
6. POST /delete-application
Expects a JSON object containing the id of the application. Deletes 1 application that has the specified id if it exists. Returns an object with a boolean field "success". The value of success is true if a record was deleted. Else, false.

Input: { "_id": ObjectId}
Output: { "success": Boolean }
