SELECT ( SELECT COUNT(user_id_follower)
           FROM followers_table
          WHERE user_id_follower = $1 ) as following_count
     , ( SELECT COUNT(following_id)
           FROM followers_table
          WHERE following_id = $1 ) as followers;