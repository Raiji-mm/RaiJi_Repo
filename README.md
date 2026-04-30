# RaiJi_Repo

## Client-Server Architecture

### Components:
- Client (Browser)
- Frontend (UI Layer)
- Backend (Server)
- Database (MongoDB)

### Flow:
Client → Frontend → Backend → Database → Backend → Frontend → Client

### Explanation:
In this architecture, the client sends an HTTP request through the browser. The frontend handles user interaction and forwards the request to the backend. The backend processes the request, applies logic, and communicates with the MongoDB database to store or retrieve data. The database returns the result to the backend, which then sends a response back to the frontend. Finally, the frontend displays the result to the client. This setup ensures clear separation of responsibilities, better security, and efficient data handling.