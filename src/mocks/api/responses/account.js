// Set a release date.
let mock_date = new Date();
mock_date.setDate(mock_date.getDate() + 182);
const mock_release_date = mock_date.toISOString().split("T")[0];

export default {
  phone: "613-445-9876",
  fullAddress: "44 Mt Hope Rd, Petawawa, ON K8H 3P1",
  email: "mytransitioncontact@email.ca",
  preferredLanguageWritten: "English",
  preferredLanguageSpoken: "English",
  emailNotifications: "On",
  notifyAboutTA: true,
  releaseDate: mock_release_date,
};
