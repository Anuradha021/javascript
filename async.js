async function fetchUserData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      console.log(users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
  
  fetchUserData();
  