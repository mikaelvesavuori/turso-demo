SELECT
  *
FROM
  CRM
WHERE
  PreferredLanguage IS 'English'
  AND TotalSpent >= 9000
ORDER BY
  LastName;