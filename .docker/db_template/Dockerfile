FROM postgres:15

COPY ./0-schema.sql /docker-entrypoint-initdb.d
COPY ./1-data.sql /docker-entrypoint-initdb.d