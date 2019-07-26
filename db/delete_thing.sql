DELETE FROM thing
WHERE thing_id = $1
RETURNING *;