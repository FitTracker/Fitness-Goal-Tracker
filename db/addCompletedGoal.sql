UPDATE user_goals
 SET complete_status = TRUE
 WHERE goal_id = $1;
SELECT * FROM user_goals WHERE user_id = $2 AND complete_status = TRUE; 
 