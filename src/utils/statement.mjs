import { users } from './users.mjs';

export const statement = (numRecords) => {
  const userList = users(numRecords);

  const values = userList.map(user => {
    return `(
      '${user.CustomerID}', '${user.FirstName}', '${user.LastName}', '${user.Email}', '${user.Phone}', '${user.AddressLine1}', '${user.AddressLine2}',
      '${user.City}', '${user.State}', '${user.ZipCode}', '${user.Country}', '${user.DateOfBirth}', '${user.Gender}', '${user.PreferredContactMethod}',
      '${user.PreferredLanguage}', '${user.CustomerSince}', '${user.LastPurchaseDate}', ${user.TotalSpent}, '${user.LastContactDate}', '${user.Notes}',
      ${user.MarketingOptIn}, ${user.LoyaltyProgramMember}, ${user.LoyaltyPoints}, '${user.ReferredBy}', '${user.ReferredByCode}', '${user.AccountManager}',
      '${user.PreferredStore}', '${user.FavoriteProductCategory}', '${user.LastProductPurchased}', ${user.LastProductRating}, ${user.SurveyParticipation},
      '${user.SubscriptionStatus}', '${user.SubscriptionStartDate}', '${user.SubscriptionEndDate}', '${user.BillingAddressLine1}', '${user.BillingAddressLine2}',
      '${user.BillingCity}', '${user.BillingState}', '${user.BillingZipCode}', '${user.BillingCountry}', '${user.ShippingAddressLine1}', '${user.ShippingAddressLine2}',
      '${user.ShippingCity}', '${user.ShippingState}', '${user.ShippingZipCode}', '${user.ShippingCountry}', '${user.PaymentMethod}', ${user.CreditLimit},
      '${user.AccountStatus}'
    )`;
  }).join(',\n');

  return `
INSERT INTO CRM (
  CustomerID, FirstName, LastName, Email, Phone, AddressLine1, AddressLine2, City, State, ZipCode, Country, DateOfBirth, Gender,
  PreferredContactMethod, PreferredLanguage, CustomerSince, LastPurchaseDate, TotalSpent, LastContactDate, Notes, MarketingOptIn,
  LoyaltyProgramMember, LoyaltyPoints, ReferredBy, ReferredByCode, AccountManager, PreferredStore, FavoriteProductCategory, LastProductPurchased,
  LastProductRating, SurveyParticipation, SubscriptionStatus, SubscriptionStartDate, SubscriptionEndDate, BillingAddressLine1,
  BillingAddressLine2, BillingCity, BillingState, BillingZipCode, BillingCountry, ShippingAddressLine1, ShippingAddressLine2, ShippingCity,
  ShippingState, ShippingZipCode, ShippingCountry, PaymentMethod, CreditLimit, AccountStatus
) VALUES
${values};
`;
};