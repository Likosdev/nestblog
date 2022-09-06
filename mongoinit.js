db.createUser({
  user: 'nestblogAdmin',
  pwd: 'secure_password',
  roles: [
    {
      role: 'readWrite',
      db: 'nestblog',
    },
  ],
});
