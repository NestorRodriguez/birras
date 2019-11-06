create database birras;
Use birras;
create table formulario_registro( 
id int auto_increment primary key not null,
mail varchar(20), 
nombre_usuario varchar(20), 
contraseña varchar(20) NOT NULL,
foreign key (mail) references REGISTRATE (mail),
foreign key (nombre_usuario) references REGISTRATE (nombre_usuario),
foreign key (contraseña) references REGISTRATE (contraseña));

create table roles(
id int auto_increment primary key not null,
roles varchar(30));

create table REGISTRATE(
id int auto_increment primary key not null,
Nombres varchar(20) not null, 
Apellidos varchar(20) not null, 
Cedula varchar (20)not null, 
fecha_nacimiento date not null, 
Direccion varchar(30)not null, 
mail varchar(20)not null,
nombre_usuario varchar(20)not null, 
contraseña varchar(20)not null);

create table RESERVAS( 
id int auto_increment primary key not null,
Bar varchar (20) not null,
Numero_personas varchar (20) not null,
Motivo varchar(20) not null, 
Dedicatoria varchar(20) not null, 
Decorado varchar (30) not null,
Adicionales varchar (20) not null,
Mesa varchar (20) not null,
Nombre_festejado varchar (20) not null);

INSERT INTO Registrate (nombres,apellidos,cedula,fecha_nacimiento,Direccion,mail,Nombre_usuario,contraseña)
 VALUES('Ingrid Nataly','Garcia Nivia','52808300','11/05/1996','carrera 60d 51 36 sur','inalalygnivia@gmail.com','5683412Mao');







INSERT INTO formulario_registro (mail,nombre_usuario,contraseña) VALUES('ivang3224@gmail.com','5683412Mao');
INSERT INTO roles(Propietario,usuario,contraseña) VALUES('Natalygarcia','inatysg''5683412Mao');
INSERT INTO reservas(Bar,Numero_personas,Motivo,Dedicatoria,Decorado,Adicionales,Mesa,Nombre_festejado) VALUES('Opera','inatysg''5683412Mao');
INSERT INTO reservas(Bar,Numero_personas,Motivo,Dedicatoria,Decorado,Adicionales,Mesa,Nombre_festejado) VALUES('Genoveva','nebirus86''5683412Mao');
INSERT INTO reservas(Bar,Numero_personas,Motivo,Dedicatoria,Decorado,Adicionales,Mesa,Nombre_festejado) VALUES('Indigo','increiblenataly''5683412Mao');
INSERT INTO reservas(Bar,Numero_personas,Motivo,Dedicatoria,Decorado,Adicionales,Mesa,Nombre_festejado) VALUES('La santa','un talivan''5683412Mao');





