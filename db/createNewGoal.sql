INSERT INTO user_goals(user_id, goal_type, goal_value, starting_value, starting_date, end_date) VALUES($1, $2, $3, $4, $5, $6);
SELECT * FROM user_goals WHERE user_id = $1;