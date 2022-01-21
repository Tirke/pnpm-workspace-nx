import {
  ListSecretsCommand,
  SecretsManagerClient,
} from '@aws-sdk/client-secrets-manager';

const secretsManagerClient = new SecretsManagerClient({
  region: process.env.AWS_REGION,
});

export const handler = async () => {
  const secretsManagerCommand = new ListSecretsCommand({
    Filters: [{ Key: 'name', Values: [`my-secret`] }],
  });

  const results = await secretsManagerClient.send(secretsManagerCommand);

  return { statusCode: 200, body: results.SecretList || [] };
};
