create database burgers_db;
use burgers_db;
create table burgers(
    id int(20) auto_increment,
    burger_name varchar(50),
    devoured boolean default false,
    primary key(id)
)