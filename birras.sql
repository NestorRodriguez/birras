create database birras;
Use birras;

alter user 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';
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
motivo varchar(100)NOT NULL,
precio double not null);
INSERT INTO decorado(decorado,motivo,precio) VALUES('Opcion 1','Halloween',20.000);
INSERT INTO decorado(decorado,motivo,precio) VALUES('Opcion 2','Año nuevo',50.000);
select * from decorado;


create table adicionales(
id_adicionales int auto_increment primary key not null,
adicionales varchar(1000)NOT NULL,
motivo varchar(100)NOT NULL,
masas varchar(30)NOT NULL,
rellenos varchar(30)NOT NULL,
cobertura varchar(30)NOT NULL,
porciones double not null);
INSERT INTO adicionales(adicionales,motivo,masas,rellenos,cobertura,porciones) VALUES('Opcion 1','Halloween','vino','naranja','crema',45.000);
INSERT INTO adicionales(adicionales,motivo,masas,rellenos,cobertura,porciones) VALUES('Opcion 1','Halloween','caramelo','vainilla','chocolate',45.000);
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
personas int not null,
motivo varchar(100) not null, 
ingreso time not null,
salida time not null,
dedicatoria varchar(900) not null, 
id_decorado int not null,
id_adicionales int not null,
festejado varchar (140) not null, 
id_metodos_pago int not null,
foreign key (id_bares) references bares (id_bares),
foreign key (id_decorado) references decorado (id_decorado),
foreign key (id_adicionales) references adicionales (id_adicionales),
foreign key (id_metodos_pago) references metodos_pago (id_metodos_pago));
INSERT INTO reserva(id_bares,personas,motivo,ingreso,salida,dedicatoria,id_decorado,id_adicionales,festejado,id_metodos_pago)
 VALUES(1,2,'año nuevo','06:00:00','03:00:00','disfrutalo',1,1,'alex',1);




