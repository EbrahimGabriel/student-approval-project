import { getUsers, addUser, deleteUser } from './user-controller.js';
import { getApplications, addApplication, deleteApplication } from './application-controller.js';
import { getUserRequests, addUserRequest, deleteUserRequest } from './user-controller.js';

export default function router(app) {

	// Allow Cross Origin Resource Sharing
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    next();
  })
  
	app.get("/get-users", getUsers);
  app.post("/add-user", addUser);
  app.post("/delete-user", deleteUser);
  app.get("/get-applications", getApplications);
  app.post("/add-application", addApplication);
  app.post("/delete-application", deleteApplication);
  app.get("/get-requests", getUserRequests);
  app.post("/add-request", addUserRequest);
  app.post("/delete-request", deleteUserRequest);
}