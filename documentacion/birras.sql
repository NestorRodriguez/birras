create database birras;
Use birras;


create table roles(
id_roles int auto_increment primary key not null,
roles varchar(30)NOT NULL);
INSERT INTO roles(roles) VALUES('Dueño bar');
INSERT INTO roles(roles) VALUES('Usuario');
select * from roles;


create table usuarios(
id_usuario int not null primary key auto_increment, 
nombre_usuario varchar(80) not null,
contraseña varchar(40) not null , 
mail varchar(60) not null, 
id_roles int not null, 
foreign key (id_roles) references roles (id_roles));
insert into  usuarios (nombre_usuario, contraseña, mail, id_roles) values ('Inatys','12345','ina@gmail.com',2);
insert into  usuarios (nombre_usuario, contraseña, mail, id_roles) values ('Nebirus','54321','diva@gmail.com', 2);
insert into  usuarios (nombre_usuario, contraseña, mail, id_roles) values ('Opera','Baropera','opera@gmail.com', 1);
insert into  usuarios (nombre_usuario, contraseña, mail, id_roles) values ('Genoveva','Bargenoveva','genoveva@gmail.com', 1);
select * from usuarios;


create table registrate(
id_registro int not null primary key auto_increment,
Nombres varchar(40) not null, 
Apellidos varchar(40) not null, 
Cedula int not null, 
fecha_nacimiento date not null, 
Direccion varchar(90)not null, 
id_usuario int not null,
foreign key (id_usuario) references usuarios (id_usuario));
insert into registrate(Nombres,Apellidos,Cedula,fecha_nacimiento,Direccion,id_usuario)
values('Nataly','Garcia',123456789,'1997-05-11','cra83 c 57 73',1);
insert into registrate(Nombres,Apellidos,Cedula,fecha_nacimiento,Direccion,id_usuario)
values('Ivan','Gutierrez',987654321,'1999-07-27','calle 68 z 78 24',2);
select *from registrate;

create table motivo(
id_motivo int auto_increment primary key not null,
motivo varchar(90)NOT NULL);
INSERT INTO motivo(motivo) VALUES('Despedida de soltera');
INSERT INTO motivo(motivo) VALUES('Despedida de soltero');
INSERT INTO motivo(motivo) VALUES('Cumpleaños');
INSERT INTO motivo(motivo) VALUES('Dia de la mujer');
INSERT INTO motivo(motivo) VALUES('Dia del hombre');
INSERT INTO motivo(motivo) VALUES('Amor y amistad');
INSERT INTO motivo(motivo) VALUES('Halloween');
INSERT INTO motivo(motivo) VALUES('Año nuevo');
select * from motivo;


create table decorado(
id_decorado int auto_increment primary key not null,
decorado varchar(1000)NOT NULL,
precio double not null);
INSERT INTO decorado(decorado,precio) VALUES('Opcion 1',20.000);
INSERT INTO decorado(decorado,precio) VALUES('Opcion 2',50.000);
INSERT INTO decorado(decorado,precio) VALUES('Opcion 3',33.000);
INSERT INTO decorado(decorado,precio) VALUES('Opcion 4',26.000);
INSERT INTO decorado(decorado,precio) VALUES('Opcion 5',16.000);
INSERT INTO decorado(decorado,precio) VALUES('Opcion 6',72.000);
INSERT INTO decorado(decorado,precio) VALUES('Opcion 7',43.000);
select * from decorado;


create table adicionales(
id_adicionales int auto_increment primary key not null,
adicionales varchar(1000)NOT NULL,
precio double not null);
INSERT INTO adicionales(adicionales,precio) VALUES('Opcion 1',45.000);
INSERT INTO adicionales(adicionales,precio) VALUES('Opcion 2',63.000);
INSERT INTO adicionales(adicionales,precio) VALUES('Opcion 3',23.000);
INSERT INTO adicionales(adicionales,precio) VALUES('Opcion 4',73.000);
select * from adicionales;


create table metodos_pago ( 
id_metodos_pago int auto_increment primary key not null,
metodo varchar (20) not null);
INSERT INTO metodos_pago(metodo) VALUES('tarjeta debito');
INSERT INTO metodos_pago(metodo) VALUES('tarjeta credito');
INSERT INTO metodos_pago(metodo) VALUES('pse');


create table pse(
id_pse int auto_increment primary key not null,
banco varchar(90)NOT NULL,
nombre_titular varchar(200)NOT NULL);
insert into pse(banco,nombre_titular)
 values ('caja social','nataly');


create table tarjeta_debito(
id_tarjeta_debito int auto_increment primary key not null,
nombre_titular varchar(200)NOT NULL,
numero_tarjeta int NOT NULL,
codigo_seguridad int NOT NULL,
fecha_vencimiento date NOT NULL);
insert into tarjeta_debito(nombre_titular,numero_tarjeta,codigo_seguridad,fecha_vencimiento)
 values ('nataly',456895624,5454,'2015-5-24');


create table tarjeta_credito(
id_tarjeta_credito int auto_increment primary key not null,
nombre_titular varchar(200)NOT NULL,
numero_tarjeta int NOT NULL,
codigo_seguridad int NOT NULL,
fecha_vencimiento date NOT NULL,
cuotas int NOT NULL);
insert into tarjeta_credito (nombre_titular,numero_tarjeta,codigo_seguridad,fecha_vencimiento,cuotas)
 values ('ivan',889515455,9864,'2015-7-12',5);


create table bares(
id_bares int auto_increment primary key not null,
Nombre_establecimiento varchar(200) not null,
Direccion varchar(90) not null,
Nit varchar (20) not null,
Horarios varchar(500) not null,
Descripcion varchar(500) not null,
Plano_mesa varchar(1000) not null,
Fotos varchar(1500) not null,
id_usuario int not null,
foreign key (id_usuario) references usuarios (id_usuario));
insert into bares (Nombre_establecimiento,Direccion,Nit,Horarios,Descripcion,Plano_mesa,Fotos,id_usuario)
 values ('Opera','Cra 14a 83-23','8301737837837','viernes-sabado:19-3','el mejor bar','url','url',3);
insert into bares (Nombre_establecimiento,Direccion,Nit,Horarios,Descripcion,Plano_mesa,Fotos,id_usuario)
 values ('Genoveva','Cll 84 14-44','830847478448','viernes-sabado:18-3','la mejor rumba','url','url',4);
select *from bares;


create table reserva( 
id_reserva int auto_increment primary key not null,
id_bares int not null,
Numero_personas int not null,
id_motivo int not null, 
horario_ingreso time not null,
horario_salida time not null,
Dedicatoria varchar(900) not null, 
id_decorado int not null,
id_adicionales int not null,
Nombre_festejado varchar (140) not null,
id_metodos_pago int not null,
foreign key (id_bares) references bares (id_bares),
foreign key (id_motivo) references motivo (id_motivo),
foreign key (id_decorado) references decorado (id_decorado),
foreign key (id_adicionales) references adicionales (id_adicionales),
foreign key (id_metodos_pago) references metodos_pago (id_metodos_pago));
INSERT INTO reserva(id_bares,Numero_personas,id_motivo,horario_ingreso,horario_salida,Dedicatoria,id_decorado,id_adicionales,Nombre_festejado,id_metodos_pago)
 VALUES(1,2,3,'06:00:00','03:00:00','disfrutalo',1,1,'alex',1);
INSERT INTO reserva(id_bares,Numero_personas,id_motivo,horario_ingreso,horario_salida,Dedicatoria,id_decorado,id_adicionales,Nombre_festejado,id_metodos_pago)
 VALUES(2,2,5,'06:00:00','03:00:00','gozalo',2,2,'santiago',2);
 select *from reserva; 



