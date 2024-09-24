const BE_URL = 'http://localhost:4500'; // Backend URL

// Create User API
export const createUserAPI = async (userDetails) => {
  const response = await fetch(`${BE_URL}/users`, {
    body: JSON.stringify(userDetails),
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
  return await response.json();
};


export const verifyAccountAPI = async (token) => {
  const response = await fetch(`${BE_URL}/users/verify-account?token=${token}`);
  return await response.json();
};

export const userLoginAPI = async (payload) => {
  const response = await fetch(`${BE_URL}/users/login`, {
    body: JSON.stringify(payload),
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });

  if (response.status !== 200) {
    throw new Error("Invalid Credentials or Something Wrong");
  }

  return await response.json();
};


export const sendResetPasswordEmailAPI = async ({ email }) => {
  const response = await fetch(`${BE_URL}/users/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ email }),  // Send the email in the request body
  });

  if (!response.ok) {
    throw new Error("Failed to send reset password email");
  }

  return await response.json();
};


// Reset Password API
export const resetPasswordAPI = async ({ token, password }) => {
  const response = await fetch(`${BE_URL}/users/reset-password?token=${token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ password }),  // Send the new password in the request body
  });

  if (!response.ok) {
    throw new Error("Failed to reset password");
  }

  return await response.json();
};
