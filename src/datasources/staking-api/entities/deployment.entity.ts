import { AddressSchema } from '@/validation/entities/schemas/address.schema';
import { NumericStringSchema } from '@/validation/entities/schemas/numeric-string.schema';
import { z } from 'zod';

export const DeploymentProductTypes = ['defi', 'pooling', 'dedicated'] as const;

// TODO: Confirm all potential values
export const DeploymentChains = ['eth', 'arb', 'bsc', 'matic', 'op'] as const;

// TODO: Confirm all potential values
export const DeploymentStatuses = ['active'] as const;

export const DeploymentSchema = z.object({
  id: z.string().uuid(),
  organization_id: z.string().uuid(),
  product_type: z.enum([...DeploymentProductTypes, 'unknown']).catch('unknown'),
  name: z.string(),
  display_name: z.string(),
  description: z.string(),
  chain: z.enum([...DeploymentChains, 'unknown']).catch('unknown'),
  chain_id: z.number(),
  address: AddressSchema,
  // TODO: Confirm all potential values
  status: z.enum([...DeploymentStatuses, 'unknown']).catch('unknown'),
  product_fee: NumericStringSchema.nullish().default(null),
});

export type Deployment = z.infer<typeof DeploymentSchema>;
