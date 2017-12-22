UPDATE user_goals
 SET complete_status = true
 WHERE goal_id = $1;
 