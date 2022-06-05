create database restaurants_distance;

use restaurants_distance;

create table units(id_uni int not null auto_increment primary key, unit_uni char(20));
insert into units (unit_uni) values("km");

create table restaurants(id_res int not null auto_increment primary key, name_res char(100));
insert into restaurants (name_res) values("Restaurante Centro A");
insert into restaurants (name_res) values("Restaurante Norte B");
insert into restaurants (name_res) values("Restaurante Sur C");
insert into restaurants (name_res) values("Restaurante Este D");

create table distances(id_res_a int, id_res_b int, distance_dis int(100), id_uni int, foreign key(id_res_a) references restaurants(id_res), foreign key(id_res_b) references restaurants(id_res), foreign key(id_uni) references units(id_uni));
insert into distances values (1, 2, 10, 1);
insert into distances values (1, 3, 2, 1);
insert into distances values (1, 4, null, 1);

insert into distances values (2, 1, 10, 1);
insert into distances values (2, 3, null, 1);
insert into distances values (2, 4, 15, 1);

insert into distances values (3, 1, 2, 1);
insert into distances values (3, 2, null, 1);
insert into distances values (3, 4, null, 1);

insert into distances values (4, 1, null, 1);
insert into distances values (4, 2, 15, 1);
insert into distances values (4, 3, null, 1);