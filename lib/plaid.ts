import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

const configuration = new Configuration({
    basePath: PlaidEnvironments.sandbox,
    baseOptions: {
        headers: {
            'PLAID-CLIENT-ID': process.env.PLAIS_CLIENT_ID,
            'PLAIN-SECRET': process.env.PLAID_SECRET,
        }
    }
})

export const plaidClient = new PlaidApi(configuration);