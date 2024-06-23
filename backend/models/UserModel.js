import db from "../config/Database.js";

class User {
  static async create(data) {
    const sql =
      "INSERT INTO user (username, email, password, role) VALUES (?, ?, ?, ?)";
    const [result] = await db.execute(sql, [
      data.username || null,
      data.email || null,
      data.password || null,
      data.role || "user",
    ]);
    return result.insertId;
  }

  static async findAll() {
    const sql = "SELECT * FROM user";
    const [rows] = await db.execute(sql);
    return rows;
  }

  static async findById(id) {
    const sql = "SELECT * FROM user WHERE id = ?";
    const [rows] = await db.execute(sql, [id]);
    return rows[0];
  }

  static async findOne(condition) {
    const { key, value } = condition;
    const sql = `SELECT * FROM user WHERE ${key} = ?`;
    const [rows] = await db.execute(sql, [value]);
    return rows[0];
  }

  static async update(id, data) {
    const sql =
      "UPDATE user SET username = ?, email = ?, password = ?, name = ?, alamat = ?, phone = ?, role = ?, refresh_token = ?, image = ?, url = ? WHERE id = ?";
    const [result] = await db.execute(sql, [
      data.username || null,
      data.email || null,
      data.password || null,
      data.name || null,
      data.alamat || null,
      data.phone || null,
      data.role || "user",
      data.refresh_token || null,
      data.image || null,
      data.url || null,
      id,
    ]);
    return result.affectedRows;
  }

  static async updatepassword(id, data) {
    const sql = "UPDATE user SET  password = ? WHERE id = ?";
    const [result] = await db.execute(sql, [data.password || null, id]);
    return result.affectedRows;
  }

  static async delete(id) {
    const sql = "DELETE FROM user WHERE id = ?";
    const [result] = await db.execute(sql, [id]);
    return result.affectedRows;
  }
}

export default User;
