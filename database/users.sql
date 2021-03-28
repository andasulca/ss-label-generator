CREATE TABLE public.users
(
    id serial,
    login character varying COLLATE pg_catalog."default",
    password character varying COLLATE pg_catalog."default"
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;