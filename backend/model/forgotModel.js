import { pool } from "../config/config.js";

export const getusers_db = async () => {
  const [users] = await pool.query("SELECT * FROM users_cred");
  return users;
}

export const findUserByEmail = async (email) => {
  try{const [user] = await pool.query("SELECT * FROM users_cred WHERE email = ?", [email]);
  return user.length ? user[0] : null;
  }catch(err){
    console.log(console.error);
  }
};

export const storeResetToken = async (email, token, expiresAt) => {
  const [result] = await pool.query("UPDATE users_cred SET reset_token = ?, reset_expires = ? WHERE email = ?", [token, expiresAt, email]);
  
  if (result.affectedRows === 0) {
    throw new Error("Failed to store reset token. Email may not exist.");
  }
};


export const findUserByToken = async (token) => {
  const [user] = await pool.query("SELECT * FROM users_cred WHERE reset_token = ? AND reset_expires > NOW()", [token]);
  return user.length ? user[0] : null;
};

export const updatePassword = async (email, hashedPassword) => {
  await pool.query("UPDATE users_cred SET password = ?, reset_token = NULL, reset_expires = NULL WHERE email = ?", [hashedPassword, email]);
};
