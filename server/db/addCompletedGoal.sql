UPDATE user_goals
 SET complete_status = TRUE
 WHERE goal_id = $1
 