UPDATE fittracker_users
SET first_name = $1, 
    last_name = $2, 
    city = $3, 
    us_state = $4, 
    email = $5, 
    avatar = $6
WHERE fitbit_id = $7;