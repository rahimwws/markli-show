/**
 * User type
 */
export type User = {
  email: string;
  name: string;
  avatar?: string;
  subscriptionStatus: 'free' | 'premium';
  credits: number;
  referralCode: string;
  referredBy?: string;
  token: string;
};

/**
 * User response type
 */
export type UserResponse = {
  access_token: string;
  refresh_token: string;
  user: {
    created_at: string;
    credits: number;
    email: string;
    id: string;
    name: string;
    image_url: string;
    referral_code: string;
    referred_by: string;
    subscription_plan: 'free';
  };
};

/**
 * User register type
 */
export type UserRegister = {
  email: string;
  name: string;
  referred_by?: string;
  avatar?: string;
};

/**
 * User login type
 */
export type UserLogin = {
  email: string;
};
