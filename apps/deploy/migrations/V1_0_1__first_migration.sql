create table users (
    id uuid primary key,
    name varchar(200) not null,
    email varchar(200) not null,
    password char(32) not null,
    created_at timestamp(0) without time zone not null default now(),
    updated_at timestamp(0) without time zone not null default now(),
    deleted_at timestamp(0) without time zone null
);

create table groups (
    id uuid primary key,
    name varchar(200) not null
);

create table user_groups (
    id uuid primary key,
    user_id uuid not null,
    group_id uuid not null
);

create table private_messages (
    id uuid primary key,
    from_user_id uuid not null,
    to_user_id uuid not null,
    message text not null,
    created_at timestamp(0) without time zone not null default now()
);

create table group_messages (
    id uuid primary key,
    user_id uuid not null,
    group_id uuid null,
    message text not null,
    created_at timestamp(0) without time zone not null default now()
);
