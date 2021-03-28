CREATE TABLE public.clients
(
    id serial,
    company_name character varying(500) COLLATE pg_catalog."default",
    reg_number numeric
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;