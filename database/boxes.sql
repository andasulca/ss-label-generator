CREATE TABLE public.boxes
(
    id serial,
    box_number numeric,
    client_id numeric,
    print_date date
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;