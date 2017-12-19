INSERT INTO fitbit_lifetime_stats (distance_km, steps, user_id) VALUES( $1, $2, $3) RETURNING fit_life_stat_id, distance_km, steps, user_id;
