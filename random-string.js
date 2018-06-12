 // http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
 function randomString(){
 return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); 
 }
 randomString();
