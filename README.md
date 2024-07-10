# Turso demo: Mock CRM

Demonstration of using [Turso](https://turso.tech) using the [JS client SDK](https://docs.turso.tech/sdk/ts/quickstart).

## Prerequisites

You will need a version of Node that's recent enough to support the `.mjs` format.

## Instructions

1. Install dependencies with `npm install` or your equivalent command.
2. Get a Turso account.
3. Create a new database called `CRM` and get an API token for it - save the token for later use. Alternatively you can follow the [quickstart](https://docs.turso.tech/sdk/ts/quickstart).
4. Plug in the token in `src/utils/turso.mjs` as well as your "organization name" and table name.
5. Run `npm run generate` to generate a bit of fake data (users in a mock CRM) and pass it to Turso.
6. Run `npm run get` to get all users with `PreferredLanguage` being `English` and `TotalSpent` over 9000. Alternatively, Turso offers an interface to see the data in their web console.
