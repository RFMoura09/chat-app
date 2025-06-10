create extension if not exists "uuid-ossp";

--#region SCHEMA auth
create schema if not exists auth;

create table if not exists auth.users (
    id uuid primary key default uuid_generate_v4(),
    name varchar(200) not null,
    email varchar(200) not null unique,
    password char(32) not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    deleted_at timestamptz
);

comment on table auth.users is 'Table containing application users data, including authentication information.';
comment on column auth.users.deleted_at is 'Timestamp for soft deletion. NULL indicates an active user.';
--#endregion

--#region SCHEMA groups
create schema if not exists groups;

create table if not exists groups.groups (
    id uuid primary key default uuid_generate_v4(),
    name varchar(200) not null
);

comment on table groups.groups is 'Table containing user groups, which can be used for chat, permissions, teams, etc.';

create table if not exists groups.user_groups (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid not null,
    group_id uuid not null,
    unique (user_id, group_id),
    constraint fk_user foreign key (user_id) references auth.users(id) on delete no action,
    constraint fk_group foreign key (group_id) references groups.groups(id) on delete no action
);

comment on table groups.user_groups is 'Table that links users to groups.';
--#endregion

--#region SCHEMA chat
create schema if not exists chat;

create table if not exists chat.private_messages (
    id uuid primary key default uuid_generate_v4(),
    from_user_id uuid not null,
    to_user_id uuid not null,
    message text not null,
    created_at timestamptz not null default now(),
    constraint fk_from_user foreign key (from_user_id) references auth.users(id) on delete no action,
    constraint fk_to_user foreign key (to_user_id) references auth.users(id) on delete no action
);

comment on table chat.private_messages is 'Private messages between users.';

create table if not exists chat.group_messages (
    id uuid primary key default uuid_generate_v4(),
    user_id uuid not null,
    group_id uuid not null,
    message text not null,
    created_at timestamptz not null default now(),
    constraint fk_user foreign key (user_id) references auth.users(id) on delete no action,
    constraint fk_group foreign key (group_id) references groups.groups(id) on delete no action
);

comment on table chat.group_messages is 'Messages sent within groups.';
--#endregion

insert into auth.users (name, email, password) values ('teste', 'teste@email.com', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');