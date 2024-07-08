export default function User(
  userName,
  userEmail,
  userPhoneNumber,
  userPlan,
  userAddOns
) {
  return {
    Name: userName,
    Email: userEmail,
    phoneNumber: userPhoneNumber,
    Plan: userPlan,
    addOns: userAddOns,
  };
}
