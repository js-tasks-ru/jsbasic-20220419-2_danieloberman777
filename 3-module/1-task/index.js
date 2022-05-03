function namify(users) {
  return users.reduce((acc, next) => {
    acc.push(next.name);
    return acc;
  }, []);
}
