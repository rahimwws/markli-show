import { User, UserResponse } from '../model/types';

export const mapUserResponse = (user: UserResponse): User => ({
  email: user.email,
  name: user.name,
  avatar: user.avatar,
  subscriptionStatus: user.subscription_plan,
  credits: user.credits,
  referralCode: user.referral_code,
  referredBy: user.referred_by,
  createdAt: user.created_at,
  updatedAt: user.updated_at,
  token: user.token,
});
