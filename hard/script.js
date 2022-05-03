function person() {
  function privatePerson() {
    const pii = {
      firstName: "Thierno",
      lastName: "Sissoko",
      job: "software engineer",
      ssn: 1996,
      get name() {
        return this.firstName;
      },
    };
    return pii.name;
  }
  return privatePerson();
}

console.log(person());
