UPDATE user_goals
 SET upvotes = upvotes + 1
 WHERE goal_id = $1;
 SELECT * FROM followers_table INNER JOIN user_goals ON followers_table.following_id = user_goals.user_id INNER JOIN fittracker_users ON user_goals.user_id = fittracker_users.id WHERE user_id_follower = $2 AND user_goals.complete_status = true;