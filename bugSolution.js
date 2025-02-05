const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... database interaction to fetch user data
    // Simulate database error for demonstration
    // const user = await db.getUser(userId);
    // if (!user) throw new Error('User not found');
    // const user = {id: userId, name: 'John Doe'};
    const user = {id: userId, name: 'John Doe'};
    res.json({ user });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});