INSERT INTO followers_table (user_id_follower, following_id) VALUES ($1, $2);
SELECT * FROM followers_table INNER JOIN user_goals ON followers_table.following_id = user_goals.user_id INNER JOIN fittracker_users ON user_goals.user_id = fittracker_users.id WHERE user_id_follower = $1 AND user_goals.complete_status = true;

